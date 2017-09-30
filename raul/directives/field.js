angular.module('app').directive('field', fieldDirective);

function fieldDirective(user) {
	return{ 
		templateUrl: 'views/field.html',
		link: {
			pre: preLink
		}
	};
function preLink(scope, element, attrs) {
		scope.user = user;
	};
}

