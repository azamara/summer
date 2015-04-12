'use strict';

angular.module('summer', [
  'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize',
  'restangular', 'ui.router', 'ui.bootstrap',
  'satellizer', 'ngSails'])
  .config(function ($stateProvider, $urlRouterProvider, $sailsProvider) {
    $sailsProvider.url = 'http://127.0.0.1:1337';

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/pages/main/main.html',
        controller: 'MainCtrl'
      });

    $urlRouterProvider.otherwise('/');
  })
;
