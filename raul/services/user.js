//services
		angular.module("app").service('user', userService);
		function userService(){
			console.log('soy un servicio');

			var user = {
				name: ''
			};
			return user;
		}