// Controller
angular.module('app').controller('nameController', ['user', '$scope', nameCtrl]);

function nameCtrl(user, $scope) {
	console.log("$scope");
	console.log($scope);

	var self = this;

	self.user = user;

	self.clear = function() {

		if(confirm('¿Quieres limpiar los datos?')) {
			self.user.name = '';
		}
		
	}
}
