'use strict';

describe('Controller: FosubjectsControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('studymonitorApp'));

  var FosubjectsControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FosubjectsControllerCtrl = $controller('FosubjectsControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FosubjectsControllerCtrl.awesomeThings.length).toBe(3);
  });
});
