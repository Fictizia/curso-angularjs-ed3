angular.module('app', ['ngRoute']);

angular.module('app').config(function($routeProvider) {

	$routeProvider
		.when("/add", {
			templateUrl: "views/add.html"
		})
		.when("/product", {
			templateUrl: "views/product.html"
		})
		.when("/list", {
			templateUrl: "views/list.html"
		})
		.otherwise({
			template : '<h1>Error 404</h1><a href="#/list">Go to list</p>'
		});
});
