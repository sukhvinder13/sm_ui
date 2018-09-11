'use strict';

describe('Controller: AddvisitorControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('studymonitorApp'));

  var AddvisitorControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddvisitorControllerCtrl = $controller('AddvisitorControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddvisitorControllerCtrl.awesomeThings.length).toBe(3);
  });
});
