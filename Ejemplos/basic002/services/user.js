// Services
angular.module('app').service('user', userService);

function userService() {
	console.log('Soy un servicio');

	var user = {
		name: ''
	};

	return user;

}
