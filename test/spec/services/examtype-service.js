'use strict';

describe('Service: ExamTypeService', function () {

  // load the service's module
  beforeEach(module('studymonitorApp'));

  // instantiate service
  var ExamTypeService;
  beforeEach(inject(function (_ExamTypeService_) {
    ExamTypeService = _ExamTypeService_;
  }));

  it('should do something', function () {
    expect(!!ExamTypeService).toBe(true);
  });

});
