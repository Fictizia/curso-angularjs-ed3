angular.module('app', ['ngRoute']);

angular.module('app').config(function($routeProvider) {

	$routeProvider
		.when("/", {
			templateUrl : "views/main.html"
		})
		.when("/red", {
			templateUrl : "views/red.html"
		})
		.when("/green", {
			templateUrl : "views/green.html"
		});
});