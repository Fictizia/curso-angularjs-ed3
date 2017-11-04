// Services
angular.module('app').service('productService', ['$http', '$firebaseArray', '$firebaseObject', productService]);

function productService($http, $firebaseArray, $firebaseObject) {

	console.log('Product Service instantiated!')

	var product = {
		list: [],
		objectList: {},
		init: init,
		get: get,
		add: add,
		clear: clear,
		//getKeys: getKeys
	};

	init();

	return product;

	function init() {
		var ref = firebase.database().ref('walarock/products');
		product.list = $firebaseArray(ref);
		product.objectList = $firebaseObject(ref);
		console.log('list');
	}

	function get(productId) {
		return product.objectList[productId];
	}

	function add(productObject) {
		// Get new unique Id for product
		//var productId = getNewId();

		//product.list[productId] = productObject;
		product.list.$add(productObject);
	}

	function clear() {
		product.list = {};
	}

  //   function getKeys() {
  //   	// Get all keys in the products catalog
		// var keys = [];
		// for(var k in product.list) keys.push(k); 
		// return keys;   	
  //   }

	// function getNewId() {
	// 	// Set min and max values for productId
	// 	var min = 1;
	// 	var max = 10000000;

	// 	// Get the current productIds in the catalog
 //    	var current_keys = product.getKeys();

 //    	// Inizialize new_key
 //    	var new_key = 0;

 //    	// Repeat until obtain a unique productId
 //    	while (!new_key || new_key in current_keys) {
 //    		// Get new random productId
 //    		new_key = Math.floor(Math.random() * (max - min + 1)) + min;
 //    	}

 //    	return new_key;
	// }

}
