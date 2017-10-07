angular.module('app').directive('field', fliedDirective);

function fliedDirective(){
	return {
		templateUrl: 'field.html'
	}
}