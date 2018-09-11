'use strict';

describe('Service: accountantService', function () {

  // load the service's module
  beforeEach(module('studymonitorApp'));

  // instantiate service
  var accountantService;
  beforeEach(inject(function (_accountantService_) {
    accountantService = _accountantService_;
  }));

  it('should do something', function () {
    expect(!!accountantService).toBe(true);
  });

});
