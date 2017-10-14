
angular.module('app')
	.filter('minutes', [minutesFilter]);


function minutesFilter() {

	return function(input, decimals) {
		input = Number(input) || 0;

		var out = Number(input / 60).toFixed(decimals);

		if(isNaN(out)) {
			out = 0;
		} 

		if(input===999999){
			out = '+20';
		} 

		return out;
	}

}