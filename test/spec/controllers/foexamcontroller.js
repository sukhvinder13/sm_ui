'use strict';

describe('Controller: FoexamcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('studymonitorApp'));

  var FoexamcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FoexamcontrollerCtrl = $controller('FoexamcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FoexamcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
