'use strict';

describe('Controller: AccountantControllerCtrl', function () {

  // load the controller's module
  beforeEach(module('studymonitorApp'));

  var AccountantControllerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccountantControllerCtrl = $controller('AccountantControllerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AccountantControllerCtrl.awesomeThings.length).toBe(3);
  });
});
