'use strict';

describe('Service: fosubjectsService', function () {

  // load the service's module
  beforeEach(module('studymonitorApp'));

  // instantiate service
  var fosubjectsService;
  beforeEach(inject(function (_fosubjectsService_) {
    fosubjectsService = _fosubjectsService_;
  }));

  it('should do something', function () {
    expect(!!fosubjectsService).toBe(true);
  });

});
