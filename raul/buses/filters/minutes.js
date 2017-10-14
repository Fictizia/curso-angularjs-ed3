angular.module('app').filter('minutes', [minutesFilter]); 

function minutesFilter(){
	return function(input) {
		input = Number(input) || 0;
		var out = input/60;

		if(isNaN(out)) {
			out=0;
		}

		return out;
	};
}