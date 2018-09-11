'use strict';

describe('Service: leaveapplicationService', function () {

  // load the service's module
  beforeEach(module('studymonitorApp'));

  // instantiate service
  var leaveapplicationService;
  beforeEach(inject(function (_leaveapplicationService_) {
    leaveapplicationService = _leaveapplicationService_;
  }));

  it('should do something', function () {
    expect(!!leaveapplicationService).toBe(true);
  });

});
