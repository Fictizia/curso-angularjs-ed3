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
		});
});
