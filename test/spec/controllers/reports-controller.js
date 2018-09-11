'use strict';

describe('Controller: ReportsControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('studymonitorApp'));

  var ReportsControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReportsControllerCtrl = $controller('ReportsControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ReportsControllerCtrl.awesomeThings.length).toBe(3);
  });
});
