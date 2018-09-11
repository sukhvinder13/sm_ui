'use strict';

describe('Controller: LeaveapplicationControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('studymonitorApp'));

  var LeaveapplicationControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LeaveapplicationControllerCtrl = $controller('LeaveapplicationControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LeaveapplicationControllerCtrl.awesomeThings.length).toBe(3);
  });
});
