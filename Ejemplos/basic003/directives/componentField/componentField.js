angular.module('app').directive('componentField', fieldDirective);


function fieldDirective(user) {

  return {
    templateUrl: 'directives/componentField/field.html',
    link: {
    	pre: preLink
    }
  };

	function preLink(scope, element, attrs) {
		scope.user = user;
	}

}

