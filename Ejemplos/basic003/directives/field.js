angular.module('app').directive('field', fieldDirective);


function fieldDirective() {
  return {
    templateUrl: 'field.html'
  };
}