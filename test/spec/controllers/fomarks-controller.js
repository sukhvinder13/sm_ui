'use strict';

describe('Controller: FomarksControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('studymonitorApp'));

  var FomarksControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FomarksControllerCtrl = $controller('FomarksControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FomarksControllerCtrl.awesomeThings.length).toBe(3);
  });
});
