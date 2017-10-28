
angular.module('app').controller('ProductController', ['$routeParams', 'productService', productController]);

function productController($routeParams, productService) {
	
	var self = this;

	// Params
	self.name = '';
	self.description = '';
	self.photos = [];
	self.image = '';

	// Methods
	self.buy = buy;


	// Run code!
	var data = productService.get($routeParams.id);

	self.name = data.title;
	self.description = data.description;
	self.photos = data.photos;
	self.image = data.photos[0];


	// Internal functions
	function buy() {
		console.log('Comprando el producto ' + $routeParams.id + '...');
	}

}
