'use strict';

describe('Service: FoexamService', function () {

  // load the service's module
  beforeEach(module('studymonitorApp'));

  // instantiate service
  var FoexamService;
  beforeEach(inject(function (_FoexamService_) {
    FoexamService = _FoexamService_;
  }));

  it('should do something', function () {
    expect(!!FoexamService).toBe(true);
  });

});
