'use strict';

describe('Controller: AddstaffControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('studymonitorApp'));

  var AddstaffControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddstaffControllerCtrl = $controller('AddstaffControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
