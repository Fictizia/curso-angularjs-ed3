angular.module('app', ['ngRoute']);

angular.module('app').config(function($routeProvider) {

	$routeProvider
		.when("/", {
			templateUrl : "views/main.html"
		})
		.when("/map", {
			templateUrl : "views/map.html"
		})
		.when("/time", {
			templateUrl : "views/time.html"
		});
});