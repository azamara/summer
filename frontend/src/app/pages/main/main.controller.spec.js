'use strict';

describe('controllers', function(){
  var scope;

  beforeEach(module('summer'));

  beforeEach(inject(function($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should define more than 5 awesome things', inject(function($controller) {
    expect(scope.awesomeThings).toBeUndefined();

    $controller('MainCtrl', {
      $scope: scope
    });

    console.log(scope);

    expect(angular.isObject(scope.defaultsSensor)).toBeTruthy();
  }));
});
