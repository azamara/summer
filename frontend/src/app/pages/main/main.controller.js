'use strict';

angular.module('summer')
  .controller('MainCtrl', function ($scope, $log, $sails) {
    //$scope.collection = [];
    $scope.currentItem = [];

    // Using .then()
    $sails.get('/temperature').then(function (resp) {
    }, function (res) {
      console.log(res);
    });

    // Watching for updates
    $sails.on('temperature', function (message) {
      if (message.verb === 'created') {
        $scope.currentItem = message.data;
      }
    });
  });
