'use strict';

describe('Service: expensesService', function () {

    // load the service's module
    beforeEach(module('studymonitorApp'));

    // instantiate service
    var expensesService;
    beforeEach(inject(function (_expensesService_) {
        expensesService = _expensesService_;
    }));
});
