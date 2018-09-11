'use strict';

describe('Service: addvisitorService', function () {

  // load the service's module
  beforeEach(module('studymonitorApp'));

  // instantiate service
  var addvisitorService;
  beforeEach(inject(function (_addvisitorService_) {
    addvisitorService = _addvisitorService_;
  }));

  it('should do something', function () {
    expect(!!addvisitorService).toBe(true);
  });

});
