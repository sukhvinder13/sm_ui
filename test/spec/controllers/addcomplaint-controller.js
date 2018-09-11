'use strict';

describe('Controller: AddcomplaintControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('studymonitorApp'));

  var AddcomplaintControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddcomplaintControllerCtrl = $controller('AddcomplaintControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddcomplaintControllerCtrl.awesomeThings.length).toBe(3);
  });
});
