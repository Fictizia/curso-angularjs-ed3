// Controller
angular.module('app').controller('ProductListController', ['productService', ProductListCtrl]);

function ProductListCtrl(productService) {
	var self = this;

	// Service binding
	self.service = productService;

	// Properties
	self.productId = '';

	// Methods
	self.get = get;
	self.purchase = purchase;
	self.viewDetails = viewDetails;


	// On Run...
	console.log('ProductListController running!');
	console.log(self.service.list);


	// Internal functions

	function get() {
		self.service.get(self.productId);
	}

	function purchase() {
		if(confirm('¿Quieres comprar este producto?')) {
			self.productId = '';
		}
	}

	function viewDetails() {
		return;
	}
}
