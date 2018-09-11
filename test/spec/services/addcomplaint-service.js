'use strict';

describe('Service: addcomplaintService', function () {

  // load the service's module
  beforeEach(module('studymonitorApp'));

  // instantiate service
  var addcomplaintService;
  beforeEach(inject(function (_addcomplaintService_) {
    addcomplaintService = _addcomplaintService_;
  }));

  it('should do something', function () {
    expect(!!addcomplaintService).toBe(true);
  });

});
