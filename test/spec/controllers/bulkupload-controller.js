'use strict';

describe('Controller: BulkuploadControllerCtrl', function () {

    // load the controller's module
    beforeEach(module('studymonitorApp'));

    var BulkuploadControllerCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        BulkuploadControllerCtrl = $controller('BulkuploadControllerCtrl', {
            $scope: scope
            // place here mocked dependencies
        });
    }));
});
