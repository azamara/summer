'use strict';

angular.module('summer')
  .controller('MainCtrl', function ($scope, $log, $sails) {
    //$scope.collection = [];
    $scope.currentItem = [];

    // Using .then()
    $sails.get('/sensor').then(function (resp) {
    }, function (res) {
      console.log(res);
    });

    // Watching for updates
    $sails.on('sensor', function (message) {
      if (message.verb === 'created') {
        $scope.currentItem = message.data;
      }
    });
  });
