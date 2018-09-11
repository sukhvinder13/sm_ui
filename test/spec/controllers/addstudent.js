'use strict';

describe('Controller: AddstudentCtrl', function () {

  // load the controller's module
  beforeEach(module('studymonitorApp'));

  var AddstudentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddstudentCtrl = $controller('AddstudentCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
});
