

angular.module('app').directive('topbar', [topbarDirective]);


function topbarDirective() {

  return {
    templateUrl: 'views/directives/topbar.html',
    link: {
    	pre: preLink
    }
  };

	function preLink(scope, element, attrs) {

		console.log(attrs);
	}

}

