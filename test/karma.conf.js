// Karma configuration
// Generated on 2016-12-05

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      'jasmine'
    ],

    // list of files / patterns to load in the browser
    files: [
      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-cookies/angular-cookies.js',
      'bower_components/angular-messages/angular-messages.js',
      'bower_components/angular-resource/angular-resource.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-touch/angular-touch.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/select2/dist/js/select2.js',
      'bower_components/bootstrap-hover-dropdown/bootstrap-hover-dropdown.js',
      'bower_components/jquery-slimscroll/jquery.slimscroll.js',
      'bower_components/jquery-slimscroll/jquery.slimscroll.min.js',
      'bower_components/bootstrap-switch/dist/js/bootstrap-switch.js',
      'bower_components/angular-bootstrap-switch/dist/angular-bootstrap-switch.js',
      'bower_components/moment/moment.js',
      'bower_components/fullcalendar/dist/fullcalendar.js',
      'bower_components/angular-ui-calendar/src/calendar.js',
      'bower_components/eonasdan-bootstrap-datetimepicker/build/js/bootstrap-datetimepicker.min.js',
      'bower_components/papaparse/papaparse.js',
      'bower_components/jasny-bootstrap/dist/js/jasny-bootstrap.js',
      'bower_components/angular-toastr/dist/angular-toastr.tpls.js',
      'bower_components/bootbox/bootbox.js',
      'bower_components/ngBootbox/dist/ngBootbox.js',
      'bower_components/vsGoogleAutocomplete/dist/vs-google-autocomplete.js',
      'bower_components/vsGoogleAutocomplete/dist/vs-autocomplete-validator.js',
      'bower_components/bootstrap-select/dist/js/bootstrap-select.js',
      'bower_components/jstree/dist/jstree.js',
      'bower_components/ng-js-tree/dist/ngJsTree.js',
      'bower_components/lodash/lodash.js',
      'bower_components/ng-youtube-embed/build/ng-youtube-embed.min.js',
      'bower_components/async/dist/async.js',
      'bower_components/jspdf/dist/jspdf.debug.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      'app/scripts/**/*.js',
      'test/mock/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      'PhantomJS'
    ],

    // Which plugins to enable
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine'
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
