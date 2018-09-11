'use strict';

describe('Service: focusdirectiveDirective', function () {

  // load the service's module
  beforeEach(module('studymonitorApp'));

  // instantiate service
  var focusdirectiveDirective;
  beforeEach(inject(function (_focusdirectiveDirective_) {
    focusdirectiveDirective = _focusdirectiveDirective_;
  }));

  it('should do something', function () {
    expect(!!focusdirectiveDirective).toBe(true);
  });

});
