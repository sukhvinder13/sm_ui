'use strict';

describe('Controller: HeaderControllerCtrl', function () {

    // load the controller's module
    beforeEach(module('studymonitorApp'));

    var HeaderControllerCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        HeaderControllerCtrl = $controller('HeaderControllerCtrl', {
            $scope: scope
            // place here mocked dependencies
        });
    }));
});
