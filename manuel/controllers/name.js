// Controller
angular.module('app').controller('nameController', nameCtrl);

function nameCtrl(user) {
	//Pasar el servicio como argumento al controller

	console.log('Soy el name controller');

	var self = this;

	// Asigna el servicio
	self.user = user;

	self.clear = function() {
		if (confirm('¿Quiéres borrar tu nombre?')) {
			self.user.name = '';
		}
	}

}
