'use strict';

describe('Service: mapsService', function () {

  // load the service's module
  beforeEach(module('studymonitorApp'));

  // instantiate service
  var mapsService;
  beforeEach(inject(function (_mapsService_) {
    mapsService = _mapsService_;
  }));

  it('should do something', function () {
    expect(!!mapsService).toBe(true);
  });

});
