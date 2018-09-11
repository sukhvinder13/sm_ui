'use strict';

describe('Service: addtopicService', function () {

  // load the service's module
  beforeEach(module('studymonitorApp'));

  // instantiate service
  var addtopicService;
  beforeEach(inject(function (_addtopicService_) {
    addtopicService = _addtopicService_;
  }));

  it('should do something', function () {
    expect(!!addtopicService).toBe(true);
  });

});
