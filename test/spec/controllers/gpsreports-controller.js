'use strict';

describe('Controller: GpsreportsControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('studymonitorApp'));

  var GpsreportsControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GpsreportsControllerCtrl = $controller('GpsreportsControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(GpsreportsControllerCtrl.awesomeThings.length).toBe(3);
  });
});
