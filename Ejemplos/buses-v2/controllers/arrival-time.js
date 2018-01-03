// Controller
angular.module('app').controller('ArrivalTimeController', ['arrivalTime', ArrivalTimeCtrl]);

function ArrivalTimeCtrl(arrivalTime) {
	var self = this;

	// Service binding
	self.service = arrivalTime;
	
	// Properties
	self.code = '';

	// Methods
	self.search = search;
	self.clear = clear;


	// On Run...
	console.log('Controller running!');


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
