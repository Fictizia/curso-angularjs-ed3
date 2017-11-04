// Controller
angular.module('app').controller('ArrivalTimeController', ['arrivalTime', '$firebaseObject', '$state', '$stateParams', ArrivalTimeCtrl]);

function ArrivalTimeCtrl(arrivalTime, $firebaseObject, $state, $stateParams) {
	var self = this;

	// Service binding
	self.service = arrivalTime;
	
	// Properties
	self.code = '';
	self.firebaseStuff;

	// Methods
	self.search = search;
	self.clear = clear;


	// On Run...
	console.log('Controller running!');

	//console.log($state); //.go('map');
	//if(!$stateParams.stopid) {
		
	//	$state.go('map');
	//}

	self.firebaseStuff = self.service;

	self.service.fireGet();

	var counter = 0

	self.firechange = function() {
		self.service.fireAdd('mensajito ' + ++counter);
	}


	// Internal functions

	function search() {
		self.service.get(self.code);
	}

	function clear() {
		if(confirm('¿Quieres limpiar los datos?')) {
			self.code = '';
		}
	}
}
