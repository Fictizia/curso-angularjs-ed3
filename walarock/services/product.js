// Services
angular.module('app').service('productService', ['$http', productService]);

function productService($http) {

	console.log('Product Service instantiated!')

	var product = {
		list: {},
		init: init,
		get: get,
		add: add,
		clear: clear,
		getKeys: getKeys
	};

	init();

	return product;

	function init() {
		return product.list = {
			1: {
				"title": "product 1",
				"description": "description 1",
				"photos": ['https://cloud.google.com/images/pricing/free.svg'],
				"price": 10.0
			},
			2: {
				"title": "product 2",
				"description": "description 2",
				"photos": [],
				"price": 20.0
			}
		};
	}

	function get(productId) {
		return product.list[productId];
	}

	function add(productObject) {
		// Get new unique Id for product
		var productId = getNewId();

		product.list[productId] = productObject;
	}

	function clear() {
		product.list = {};
	}

    function getKeys() {
    	// Get all keys in the products catalog
		var keys = [];
		for(var k in product.list) keys.push(k); 
		return keys;   	
    }

	function getNewId() {
		// Set min and max values for productId
		var min = 1;
		var max = 10000000;

		// Get the current productIds in the catalog
    	var current_keys = product.getKeys();

    	// Inizialize new_key
    	var new_key = 0;

    	// Repeat until obtain a unique productId
    	while (!new_key || new_key in current_keys) {
    		// Get new random productId
    		new_key = Math.floor(Math.random() * (max - min + 1)) + min;
    	}

    	return new_key;
	}

}
