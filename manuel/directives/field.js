// Directives

angular.module('app').directive('field', ['user', fieldDirective]);

function fieldDirective(user) {
	return {
		templateUrl: 'views/field.html',
		link: {
			pre: prelink
		}
	};

	function prelink(scope, element, attrs) {
		scope.user = user;
		scope.icon = attrs.icon;
		scope.title = attrs.title;
		scope.id = attrs.id;
	}

}


