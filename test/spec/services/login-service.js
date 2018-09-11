'use strict';

describe('Service: loginService', function () {

    // load the service's module
    beforeEach(module('studymonitorApp'));

    // instantiate service
    var loginService;
    beforeEach(inject(function (_loginService_) {
        loginService = _loginService_;
    }));
});
