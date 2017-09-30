//Services 

angular.module('app').service('user', userService);

	function userService() {
		console.log('Soy el user service');

		// Se define Object para paso por referencia
		var user = {
			name: ''
		}

		return user;
}
