'use strict';

describe('Controller: LibraryControllerCtrl', function () {

    // load the controller's module
    beforeEach(module('studymonitorApp'));

    var LibraryControllerCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        LibraryControllerCtrl = $controller('LibraryControllerCtrl', {
            $scope: scope
            // place here mocked dependencies
        });
    }));
});
