'use strict';

angular.module('summer')
  .controller('MainCtrl', function ($scope, $log, $sails) {
    $scope.currentItem = [];
    $scope.defaultsSensor = {
      dust: {
        type: 'warning',
        value: 30,
        unit: '㎍/㎥'
      },
      temperature: {
        type: 'danger',
        value: 25
      },
      humidity: {
        type: 'default',
        value: 50
      },
      sound: {
        type: 'info',
        value: 10,
        unit: '㏈'
      }
    };
    $scope.locations = [
      {
        _id: 2,
        name: 'Master Room',
        initData: [],
        sensors: angular.copy($scope.defaultsSensor)
      }
    ];

    $scope.init = function() {
      $sails.get('http://summer-api.jnw.io/sensor?sort=updatedAt+desc').then(function (res) {
        _.forEach($scope.locations, function(location) {
          location.initData = _.sortBy(_.compact(_.map(res.body, function(item) {
            if(+item.location === location._id) {
              return {
                humidity: item.humidity,
                sound: item.sound,
                temperature: item.temperature,
                dust: item.dust,
                updatedAt: +moment(item.updatedAt),
                vibration: item.vibration
              };
            }
          })), 'updatedAt');

          _.forEach($scope.defaultsSensor, function(value, key) {
            location.sensors[key].value = location.initData[0][key];
          });
        });
      }, function (res) {
        console.log(res);
      });
    };
    $scope.init();

    // Watching for updates
    $sails.on('sensor', function (message) {
      if (message.verb === 'created') {
        $scope.currentItem = message.data;

        var targetLocation = _.find($scope.locations, {_id: +$scope.currentItem.location});
        _.forEach($scope.defaultsSensor, function(value, key) {
          targetLocation.sensors[key].value = $scope.currentItem[key];
        });
      }
    });

    $sails.on('reconnect', function() {
      $scope.init();
    });
  });

