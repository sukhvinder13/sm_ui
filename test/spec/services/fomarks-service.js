'use strict';

describe('Service: FoMarksService', function () {

  // load the service's module
  beforeEach(module('studymonitorApp'));

  // instantiate service
  var FoMarksService;
  beforeEach(inject(function (_FoMarksService_) {
    FoMarksService = _FoMarksService_;
  }));

  it('should do something', function () {
    expect(!!FoMarksService).toBe(true);
  });

});
