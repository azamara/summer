'use strict';

angular.module('summer', [
  'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize',
  'restangular', 'ui.router', 'ui.bootstrap',
  'satellizer', 'ngSails'])
  .config(function ($stateProvider, $urlRouterProvider, $sailsProvider) {
    $sailsProvider.url = 'http://summer-api.jnw.io';

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/pages/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
