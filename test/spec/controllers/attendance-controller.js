'use strict';

describe('Controller: AttendanceController', function () {

    // load the controller's module
    beforeEach(module('studymonitorApp'));

    var AttendanceControllerCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        AttendanceControllerCtrl = $controller('AttendanceController', {
            $scope: scope
            // place here mocked dependencies
        });
    }));
});
