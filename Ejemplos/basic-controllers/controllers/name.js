angular.module('app').controller('nameController', ['user', nameCtrl]);

function nameCtrl(user) {
	console.log('Soy un controllador');

	var self = this;

	self.user = user;

	self.clear = function() {

		if(confirm('¿Quieres limpiar los datos?')) {
			self.user.name = '';
		}
		
	}
}