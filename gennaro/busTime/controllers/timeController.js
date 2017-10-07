// Controller
angular.module('app').controller('timeController', timeCtrl);

function timeCtrl(stopTime) {
	console.log('Soy un controllador');

	var self = this;

	self.search = function() {

		stopTime.get(self.code);
		
	}
	
	self.stopTime = stopTime;

	self.code = "";
}
