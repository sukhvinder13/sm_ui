'use strict';

describe('Controller: BulkremovalsControllerCtrl', function () {

    // load the controller's module
    beforeEach(module('studymonitorApp'));

    var BulkremovalsControllerCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        BulkremovalsControllerCtrl = $controller('BulkremovalsControllerCtrl', {
            $scope: scope
            // place here mocked dependencies
        });
    }));
});
