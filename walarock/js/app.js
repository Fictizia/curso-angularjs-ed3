angular.module('app', ['ngRoute', 'firebase']);

angular.module('app').config(function($routeProvider) {

	$routeProvider
		.when("/list", {
			templateUrl: "views/list.html"
		})
		.when("/add", {
			templateUrl: "views/add.html"
		})
		.when("/product/:id", {
			templateUrl: "views/product.html"
		})
		.otherwise({
			template : '<h1>Error 404</h1><a href="#!/list">Go to list</p>'
		});
});
