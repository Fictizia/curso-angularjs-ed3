

angular.module('app').directive('buttons', ['stopTime', buttonsDirective]);


function buttonsDirective(stopTime) {

  return {
    templateUrl: 'views/directives/buttons.html',
    link: {
    	pre: preLink
    }
  };

	function preLink(scope, element, attrs) {
		scope.stopTime = stopTime;
		scope.timeController = attrs.timeController

		console.log(attrs);
	}

}

