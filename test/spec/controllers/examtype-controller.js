'use strict';

describe('Controller: ExamtypeControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('studymonitorApp'));

  var ExamtypeControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExamtypeControllerCtrl = $controller('ExamtypeControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ExamtypeControllerCtrl.awesomeThings.length).toBe(3);
  });
});
