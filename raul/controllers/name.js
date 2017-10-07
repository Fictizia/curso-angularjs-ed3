//controller

		angular.module('app').controller('nameController', namectrl);

		function namectrl(user) {
			console.log('soy un controllador');
			var self = this;

			self.user = user;

			self.name = '';
			self.clear = function(){
				if(confirm ('¿quieres limpiar los datos?')){
					self.user.name = '';
				}
			};
		}