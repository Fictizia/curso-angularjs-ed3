

angular.module('app').directive('field', ['user', fieldDirective]);


function fieldDirective(user) {

  return {
    templateUrl: 'views/directives/field.html',
    link: {
    	pre: preLink
    }
  };

	function preLink(scope, element, attrs) {
		scope.user = user;
		scope.name = attrs.name

		console.log(attrs);
	}

}

