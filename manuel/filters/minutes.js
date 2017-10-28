
angular.module('app')
	.filter('minutes', [minutesFilter]);


function minutesFilter() {

	return function(input, decimals) {
		input = Number(input) || 0;
		decimals = Number(decimals) || 0;

		var out = Number(input / 60).toFixed(decimals);

		if(isNaN(out)) {
			out = 0;
		} 

		if(out > 20){
			out = '+20';
		} 

		return out;
	}

}