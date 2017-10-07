
      //App
      angular.module('app', ['ngRoute'])

      .config(function($routeProvider) {

      	$routeProvider
      		.when("/", {
      			templateUrl : "views/main.html"
      		})
      		.when("/time", {
      			templateUrl : "views/time.html"
      		})
      		.when("/map", {
      			templateUrl : "views/map.html"
      		});
      });
