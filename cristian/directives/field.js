//Directives

angular.module('app').directive('field',['user', fieldDirective]);

function fieldDirective (user){

  return {
    templateUrl: 'views/directives/field.html',
    link: {
        pre: prelink
    }
  };

  function prelink(scope, element, attrs){
    scope.user = user;
    scpoe.name = attrrs.name;
  }

}
