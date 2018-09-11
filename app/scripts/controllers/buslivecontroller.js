'use strict';

/**
 * @ngdoc function
 * @name studymonitorApp.controller:BuslivecontrollerCtrl
 * @description
 * # BuslivecontrollerCtrl
 * Controller of the studymonitorApp
 */
angular.module('studymonitorApp')
  .controller('Buslivecontroller', function (mapsService, busLiveService, $cookies, $sce, $scope, configService, $timeout) {
    var BusliveCtrl = this;
    BusliveCtrl.schoolId = $cookies.getObject('uds').schoolId;
    BusliveCtrl.loginId = $cookies.getObject('uds').id;
    BusliveCtrl.role = $cookies.get('role');
    var roleAccess = JSON.parse(window.localStorage.getItem('tree'));
    $scope.positions = [];
    BusliveCtrl.schoollist;
    var position = [];
    var marker;
    var rotationAngle;
    $sce.vechileNo = 'asdasd';
    // $scope.vechileNo = BusliveCtrl.getRegno;


    // map
    var map;
    map = mapsService.initMap('liveStream_canvas_map', { lat: 17.455439, lng: 78.434185 }, 10);
    // map end
    // var regNo = BusliveCtrl.vehList;
    // BusliveCtrl.getRegno(regNo);
    BusliveCtrl.getRegno = function (regNo) {
      // $scope.positions.splice(1, $scope.positions.length-1);
      regNo = JSON.parse(regNo);
      var IMEIByVichleNo = function (subCb) {
        $scope.positions.push({ lat: regNo.pickupDetails.lat, long: regNo.pickupDetails.log, url: 'images/student_traking.png', title: "This Is my student location" })
        busLiveService.getIMEIByVichleNo(regNo.servicerel.vehicleNo).then(function (response) {
          console.log(response);
          if (response.length > 0) {
            IMEIConnect = response[0].IMEINo;
            subCb(null, IMEIConnect);
          }
          else {
            subCb("Record Not Found")
          }
        }, function (error) {
          subCb(error)
        });
      }
      var getLastLatAndLong = function (results, subCb) {
        busLiveService.getLatAndLogByDeviceId(results.IMEIByVichleNo).then(function (response) {

          if (response) {
            $scope.positions.push({
              lat: response.lat
              , long: response.long
              , url: 'images/location-point.svg'
              , title: "This Is my bus point"
            });
            position = [$scope.positions[2].lat, $scope.positions[2].long]
            subCb(null, response);
          }
          else
            subCb('Device data is not avilable');
        }, function (error) {
          subCb(error)
        });

      }
      async.auto({
        IMEIByVichleNo: IMEIByVichleNo,
        getLastLatAndLong: ['IMEIByVichleNo', getLastLatAndLong]
      }, function (err, success) {
        if (err) {
          alert(err);
        } else {
          console.log('$scope.positions');
          console.log($scope.positions);
          console.log('success')
          console.log(success)
          var waypoint = [
            {
              location: new google.maps.LatLng($scope.positions[1].lat, $scope.positions[1].long),
              stopover: true
            }
          ]
          mapsService.createRouteWayPoints($scope.positions[0], $scope.positions[2], waypoint).then(function (success) {
            var rendererOptions = {
              map: map,
              suppressMarkers: true
            }
            var directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
            directionsDisplay.setDirections(success);
          });
          mapsService.createMarker($scope.positions[0].lat, $scope.positions[0].long, $scope.positions[0].url, $scope.positions[0].title, map);
          mapsService.createMarker($scope.positions[1].lat, $scope.positions[1].long, $scope.positions[1].url, $scope.positions[1].title, map);
          marker = mapsService.createMarker($scope.positions[2].lat, $scope.positions[2].long, $scope.positions[2].url, $scope.positions[2].title, map, 'bounce');
          // socket call inti here
          connectSocket(success.getLastLatAndLong.device_id);

        }
      })
    };
    // var regNo = BusliveCtrl.vehList;
    // BusliveCtrl.getRegno(regNo);






    function Init() {
      this.getvehicle = function () {
        busLiveService.getVehicleDetailsbySchoolId(BusliveCtrl.schoolId, BusliveCtrl.role, BusliveCtrl.loginId).then(function (response) {
          if (response) {
            BusliveCtrl.vehList = response.data;
            console.log(BusliveCtrl.vehList);
            if(BusliveCtrl.role === 'Student') BusliveCtrl.getRegno(JSON.stringify(BusliveCtrl.vehList[0]));
          } else {
            alert('only student login');
          }
        }, function (error) {
          // console.log(error);
        });

      };

      this.getschoollocation = function () {
        busLiveService.getbyschoollocationSchoolId(BusliveCtrl.schoolId).then(function (response) {
          if (response) {
            BusliveCtrl.schoollist = response;
            $scope.positions.push({ lat: response.lat, long: response.lng, url: 'images/school.svg', "title": "This school location" })
          }
        }, function (error) {
          console.log(error);
        });

      };
    }
    (new Init()).getvehicle();
    (new Init()).getschoollocation();




    var socket = io(configService.GPStracking() + '/');
    var IMEIConnect;
    function connectSocket(IMEIConnect) {
      socket.on('connect', function () {
        console.log('Connected to server');
      });
      socket.on("newRecord", function (message) {
        if (IMEIConnect == message[0].device_id) {
          console.log("message[0].device_id" + message[0].device_id);
          console.log("IMEIConnect" + message[0].lat, message[0].long);
          console.log("direction" + message[0].direction);
          $scope.$apply(function () {
            rotationAngle = message[0].direction;
            transition([message[0].lat, message[0].long]);
            // transition([17.528231, 78.266800]);
          });
        }
      });
    }

    socket.on('disconnect', function () {
      console.log('Disconnected from server');
    });


    // smooth marker move

    //image rotation (do not touch this code)
    var RotateIcon = function (options) {
      this.options = options || {};
      this.rImg = options.img || new Image();
      this.rImg.src = this.rImg.src || this.options.url || '';
      this.options.width = this.options.width || this.rImg.width || 52;
      this.options.height = this.options.height || this.rImg.height || 60;
      var canvas = document.createElement("canvas");
      canvas.width = this.options.width;
      canvas.height = this.options.height;
      this.context = canvas.getContext("2d");
      this.canvas = canvas;
    };
    RotateIcon.makeIcon = function (url) {
      return new RotateIcon({ url: url });
    };
    RotateIcon.prototype.setRotation = function (options) {
      var canvas = this.context,
        angle = options.deg ? options.deg * Math.PI / 180 :
          options.rad,
        centerX = this.options.width / 2,
        centerY = this.options.height / 2;

      canvas.clearRect(0, 0, this.options.width, this.options.height);
      canvas.save();
      canvas.translate(centerX, centerY);
      canvas.rotate(angle);
      canvas.translate(-centerX, -centerY);
      canvas.drawImage(this.rImg, 0, 0);
      canvas.restore();
      return this;
    };
    RotateIcon.prototype.getUrl = function () {
      return this.canvas.toDataURL('image/png');
    };
    //image rotation end




    var numDeltas = 100;
    var delay = 30; //milliseconds
    var i = 0;
    var deltaLat;
    var deltaLng;
    function transition(result) {
      i = 0;
      deltaLat = (result[0] - position[0]) / numDeltas;
      deltaLng = (result[1] - position[1]) / numDeltas;
      moveMarker();
    }

    function moveMarker() {
      position[0] += deltaLat;
      position[1] += deltaLng;
      var latlng = new google.maps.LatLng(position[0], position[1]);
      marker.setPosition(latlng);
      marker.setIcon({
        url: 'images/location-point.svg',
        // url: RotateIcon
        //   .makeIcon(
        //     'images/location-point.svg')
        //   .setRotation({ deg: - rotationAngle })
        //   .getUrl(),
        anchor: new google.maps.Point(25, 50),
        scaledSize: new google.maps.Size(50, 50)

      })
      if (i != numDeltas) {
        i++;
        setTimeout(moveMarker, delay);
      }
    }

  })






  .controller('AdminBuslivecontroller', function (mapsService, busLiveService, $cookies, configService, $scope, $filter) {

    var BusAdminliveCtrl = this;
    var position = [];
    var waypts = [];
    var marker;
    $scope.historyPoints = [];
    $scope.vehicle_stats;
    var flightPath;
    $scope.historydate = new Date();
  //  console.log(history);

    BusAdminliveCtrl.schoolId = $cookies.getObject('uds').schoolId;
    // BusAdminliveCtrl.role = $cookies.get('role');
    var map;
    map = mapsService.initMap('map_canvas_history', { lat: 17.455439, lng: 78.434185 }, 15);
    // map end
    function Init() {
      this.getvehicle = function () {
        busLiveService.getVehicleDetailsbySchoolIdAdmin(BusAdminliveCtrl.schoolId).then(function (response) {
          if (response) {
            BusAdminliveCtrl.vehList = response.data;
          }
        }, function (error) {
          console.log(error);
        });
      }
    }
    (new Init()).getvehicle();


    var paintRoute = function (startPoint, endPoint, waypts) {
      flightPath = mapsService.creationPolyline();
      flightPath.setMap(map);
      position = [endPoint.lat, endPoint.lng];
      if ($scope.historyPoints.length > 1) {
        mapsService.createMarkerPath(endPoint.lat, endPoint.lng, endPoint.direction, map);
      } else {
        marker = mapsService.createMarker(endPoint.lat, endPoint.lng, 'images/greenmap.svg', 'start point', map, 'bounce');
      }
      // paintMarkers($scope.historyPoints);
      // });
    }
    var paintMarkers = function (points) {
      async.eachSeries(points, function (way, subCB) {
        way.location.direction = (way.location.direction == undefined) ? 0 : way.location.direction;
        setTimeout(function () {
          mapsService.createMarkerPath(way.location.lat, way.location.lng, way.location.direction, map);
          flightPath.getPath().push(new google.maps.LatLng(way.location.lat, way.location.lng))
          subCB();
        }, 100);
      }, function (err, success) {
        if (err) {
          alert(err);
        } else {
          // connectSocket(serno.IMEINo);
        }
      })
    }

    $scope.history = function (serviceNo, historydate) {

      var serno = JSON.parse(serviceNo);
      var date = $filter('date')(historydate, 'yyyy-MM-dd');
      console.log('serviceNo<><><');
      console.log(serviceNo)
      console.log(historydate)
      busLiveService.gethistoryDetailsbySchoolId(serno.IMEINo, date).then(function (response) {
        console.log('response<><><');
        // historydate = response[0].date;
        console.log(response)
        if (response.length > 0) {
          $scope.historyPoints = response;
          $scope.vehicle_stats = response[response.length - 1].location;
          map = mapsService.initMap('map_canvas_history', { lat: 17.455439, lng: 78.434185 }, 13);
          waypts = [];
          for (var x = 0; x < $scope.historyPoints.length; x++) {
            waypts.push({ lat: $scope.historyPoints[x].location.lat, lng: $scope.historyPoints[x].location.lng })
          }
          flightPath = mapsService.creationPolyline();
          flightPath.setMap(map);
          // create star point end point
          mapsService.createMarker($scope.historyPoints[0].location.lat, $scope.historyPoints[0].location.lng, 'images/greenmap.svg', 'start point', map);
          marker = mapsService.createMarker($scope.historyPoints[$scope.historyPoints.length - 1].location.lat, $scope.historyPoints[$scope.historyPoints.length - 1].location.lng, 'images/redmap.svg', 'end point', map, 'bounce');
          // create star point end point end
          paintMarkers($scope.historyPoints);
          if ($filter('date')(historydate, 'yyyy-MM-dd') == $filter('date')(new Date(), 'yyyy-MM-dd')) {
            connectSocket(serno.IMEINo);
          }
        } else {
          alert("no history Found");
          connectSocket(serno.IMEINo);
        }
      }, function (error) {
        //console.log('Error while fetching subject list . Error stack : ' + error);
      });
    }




    var numDeltas = 100;
    var delay = 30; //milliseconds
    var i = 0;
    var deltaLat;
    var deltaLng;
    function transition(result) {
      i = 0;
      deltaLat = (result[0] - position[0]) / numDeltas;
      deltaLng = (result[1] - position[1]) / numDeltas;
      moveMarker();
    }

    function moveMarker() {
      position[0] += deltaLat;
      position[1] += deltaLng;
      var latlng = new google.maps.LatLng(position[0], position[1]);
      if (!marker) {
        marker = mapsService.createMarker(position[0], position[1], 'images/redmap.svg', 'live location', map, 'bounce');
      }
      marker.setPosition(latlng);
      marker.setIcon({
        url: 'images/location-point.svg',
        // url: RotateIcon
        //   .makeIcon(
        //     'images/location-point.svg')
        //   .setRotation({ deg: - rotationAngle })
        //   .getUrl(),
        anchor: new google.maps.Point(25, 50),
        scaledSize: new google.maps.Size(50, 50)

      })
      if (i != numDeltas) {
        i++;
        setTimeout(moveMarker, delay);
      }
    }


    var socket = io(configService.GPStracking() + '/');
    function connectSocket(IMEIConnect) {
      socket.on('connect', function () {
        console.log('Connected to server');
      });
      socket.on("newRecord", function (message) {
        if (IMEIConnect == message[0].device_id) {
          console.log("message[0].device_id" + message[0].device_id);
          console.log("IMEIConnect" + message[0].lat, message[0].long);
          console.log("direction" + message[0].direction);

          $scope.vehicle_stats = message[0];
          $scope.$apply(function () {
            // rotationAngle = message[0].direction;
            if (position.length < 2) {
              position[0] = message[0].lat
              position[1] = message[0].long
            }
            transition([message[0].lat, message[0].long]);
            $scope.historyPoints.push({
              location: {
                date: message[0].date,
                direction: message[0].direction,
                ignition: message[0].ignition,
                lat: message[0].lat,
                lng: message[0].long,
                speedKPH: message[0].speedKPH,
              }, stopover: true
            })
            paintRoute($scope.historyPoints[0].location, $scope.historyPoints[$scope.historyPoints.length - 1].location, waypts);
            // transition([17.528231, 78.266800]);
          });
        }
      });
    }

    socket.on('disconnect', function () {
      console.log('Disconnected from server');
    });

  });
