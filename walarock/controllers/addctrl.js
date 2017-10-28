//controller

		angular.module('app').controller('addController', addctrl);

		function addctrl(productService) {
			var self = this;


			self.add = "";
			self.title = "";
			self.description = "";
			self.photos = "";
			self.price = "";
			self.update = update;

			//guardado

			function update(){

				var newProduct = { 
					"title": self.title,
					"description": self.description,
					"photos": [self.photos],
					"price": self.price
				};

				productService.add(newProduct);
				console.log(productService.list);
			}
		}