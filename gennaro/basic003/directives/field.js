angular.module('app').directive('field', ['user', fieldDirective]);


function fieldDirective(user) {
  return {
    templateUrl: 'field.html',
    link: {
    	pre: preLink
    }
  };
  function preLink(scope, element, attrs){
  	scope.user = user;
  }
}