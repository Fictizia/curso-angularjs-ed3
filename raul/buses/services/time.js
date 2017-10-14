//services
		angular.module("app").service('time', ['$http',timeService]);
		function timeService($http){

			var paradas = {
				list: [],
				get: get,
			}
			return paradas;

		function get(stopId){
			$http.get('http://192.168.1.20:3000/stop/'+ stopId)
			.then(function(response){
				console.log(response);
				paradas.list = response.data.arrives
			})
			
		}
	}