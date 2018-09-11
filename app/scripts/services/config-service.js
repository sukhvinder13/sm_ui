'use strict';

/**
 * @ngdoc service
 * @name studymonitorApp.configService
 * @description
 * # configService
 * Service in the studymonitorApp.
 */
angular.module('studymonitorApp')
    // AngularJS will instantiate a singleton by calling "new" on this function
    .service('configService', function ($q, Noticeboard, Assignment, $location, Leave, FOexam, School, SMUser, Student, Attendance, $filter, Timetable, Schedule, Class, Media, UserMessages, Chat) {
        // AngularJS will instantiate a singleton by calling "new" on this function

        var hostname = location.hostname;
        this.baseUrl = function () {
            return "http://localhost:3000/api";
        };
        this.tracking = function () {
            return hostname == 'studymonitor.in' ? 'http://gpsapi.studymonitor.in/api' : 'http://dev.studymonitor.in:3003/api';
        }
        this.GPStracking = function () {
            return 'http://dev.studymonitor.in:3007';
            // return 'http://localhost:3007';
        }
    });