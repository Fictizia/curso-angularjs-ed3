//Services 

angular.module('app').service('user', userService);

	function userService() {
		// Se define Object para paso por referencia
		var user = {
			name: ''
		}
		return user;
	}

angular.module('app').service('bus', ['$http', busService]);

	function busService($http){
		var bus = {
			respuesta:[],
			get: get,
			paradas:[],
		}
		return bus
		
		function get(stopId){
			$http.get('http://192.168.1.20:3000/stop/'+stopId)
			.then(function(response){
				console.log(response);
				bus.respuesta = response.data;
				bus.paradas = response.data.arrives;
			});
		}
	}