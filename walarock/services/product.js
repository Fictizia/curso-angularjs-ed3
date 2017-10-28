// Services
angular.module('app').service('productService', ['$http', productService]);

function productService($http) {

	console.log('Product Service instantiated!')

	var product = {
		list: [],
		get: get,
		add: add,
		clear: clear
	};

	return product;

	function get() {
		return;
	}

	function add() {
		return;
	}

	function clear() {
		product.list = [];
	}

}
