// App
angular.module('app', ['ngRoute', 'firebase'])

	.config(function($routeProvider) {
		$routeProvider
			.when("/", {
				templateUrl : "views/main.html"
			})
			.when("/arrival-time", {
				templateUrl : "views/arrival-time.html"
			})
			.when("/map", {
				templateUrl : "views/map.html"
			});
	});
