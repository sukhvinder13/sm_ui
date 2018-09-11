'use strict';

describe('Controller: AddtopicControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('studymonitorApp'));

  var AddtopicControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddtopicControllerCtrl = $controller('AddtopicControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddtopicControllerCtrl.awesomeThings.length).toBe(3);
  });
});
