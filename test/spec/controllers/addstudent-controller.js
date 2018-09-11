'use strict';

describe('Controller: AddstudentControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('studymonitorApp'));

  var AddstudentControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddstudentControllerCtrl = $controller('AddstudentControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
