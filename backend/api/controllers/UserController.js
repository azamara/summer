/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var qs = require('querystring');
var request = require('request');
var jwt = require('jwt-simple');
var moment = require('moment');

module.exports = {
  login: function (req, res) {
    var requestTokenUrl = 'https://api.twitter.com/oauth/request_token';
    var accessTokenUrl = 'https://api.twitter.com/oauth/access_token';
    var authenticateUrl = 'https://api.twitter.com/oauth/authorize';

    if (!req.query.oauth_token || !req.query.oauth_verifier) {
      var requestTokenOauth = {
        consumer_key: config.TWITTER_KEY,
        consumer_secret: config.TWITTER_SECRET,
        callback: config.TWITTER_CALLBACK
      };

      // Step 1. Obtain request token for the authorization popup.
      request.post({
        url: requestTokenUrl,
        oauth: requestTokenOauth
      }, function (err, response, body) {
        var oauthToken = qs.parse(body);
        var params = qs.stringify({
          oauth_token: oauthToken.oauth_token
        });

        // Step 2. Redirect to the authorization screen.
        res.redirect(authenticateUrl + '?' + params);
      });
    } else {
      var accessTokenOauth = {
        consumer_key: config.TWITTER_KEY,
        consumer_secret: config.TWITTER_SECRET,
        token: req.query.oauth_token,
        verifier: req.query.oauth_verifier
      };

      // Step 3. Exchange oauth token and oauth verifier for access token.
      request.post({
        url: accessTokenUrl,
        oauth: accessTokenOauth
      }, function (err, response, profile) {
        profile = qs.parse(profile);
        // Step 4a. Link user accounts.
        if (req.headers.authorization) {
          User.findOne({
            twitter: profile.user_id
          }, function (err, existingUser) {
            if (existingUser) {
              return res.status(409).send({
                message: 'There is already a Twitter account that belongs to you'
              });
            }
            var token = req.headers.authorization.split(' ')[1];
            var payload = jwt.decode(token, config.TOKEN_SECRET);
            User.findById(payload.sub, function (err, user) {
              if (!user) {
                return res.status(400).send({
                  message: 'User not found'
                });
              }
              user.twitter = profile.user_id;
              user.displayName = user.displayName || profile.screen_name;
              user.twitterToken = profile.oauth_token;
              user.twitterSecret = profile.oauth_token_secret;
              user.save(function (err) {
                res.send({
                  token: createToken(user)
                });
              });
            });
          });
        } else {
          // Step 4b. Create a new user account or return an existing one.
          User.findOne({
            twitter: profile.user_id
          }, function (err, existingUser) {
            if (existingUser) {
              var token = createToken(existingUser);
              return res.send({
                token: token
              });
            }
            User.create({
              twitter: profile.user_id,
              displayName: profile.screen_name,
              twitterToken: profile.oauth_token,
              twitterSecret: profile.oauth_token_secret
            }).exec(function (err, user) {
              var token = createToken(user);
              res.send({
                token: token
              });
            });
          });
        }
      });
    }
  }
};

function createToken(user) {
  var payload = {
    sub: user.id,
    iat: moment().unix(),
    exp: moment().add(14, 'days').unix()
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
}
