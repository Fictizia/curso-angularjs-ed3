// Controller
angular.module('app').controller('ArrivalTimeController', ['arrivalTime', '$firebaseObject', ArrivalTimeCtrl]);

function ArrivalTimeCtrl(arrivalTime, $firebaseObject) {
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
