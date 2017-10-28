
angular.module('app').controller('ProductController', ['productService', productController]);

function productController(productService) {
	
	var self = this;

	self.name = 'Product name';
	self.description = 'Product description';
	self.image = 'https://cloud.google.com/images/pricing/free.svg';

	self.buy = buy;


	function buy() {
		console.log('Comprando el producto...');
	}

}
