// Controller
angular.module('app').controller('nameController', ["user","bus","$window", "$scope", nameCtrl]);

function nameCtrl(user, bus, $window, $scope) {
	//Pasar el servicio como argumento al controller
	var self = this;

	// Asigna el servicio
	self.user = user;

	self.clear = function() {
		if (confirm('¿Quiéres borrar tu nombre?')) {
			self.user.name = '';
		}
	}

	self.bus = bus;

	self.search = function(){
		self.bus.get(self.code)
	}

	//$window.map = new google.maps.Map(document.getElementById('map'), {
    //    center: {
    //        lat: -34.397,
    //        lng: 150.644
    //    },
    //    zoom: 8
    //});

	$scope.initialize = function() {
          var map = new google.maps.Map(document.getElementById('map'), {
             center: {lat: -32.397, lng: 150.644},
             zoom: 8
          });
       }
       
    google.maps.event.addDomListener(window, 'load', $scope.initialize);

    var item = {
        coordinates: [40.6423926, -97.3981926]
    };

    //add marker
    $scope.mymarker = new google.maps.Marker({
        map: $scope.initialize.map,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(item.coordinates[0], item.coordinates[1]),
        title: 'asdf'
    });

}
