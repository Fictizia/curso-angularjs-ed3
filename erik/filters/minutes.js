angular.module('app').filter('minutes', [minutesFilter]);

function minutesFilter(input){
	return function(input){
		console.log(input);
		if (input == 0){
			return "Near to stop"
		}else if(input >= 999999){
			return "More than 20m"
		}
		input = Number(input);
		var out = input/60;

		if(isNaN(out)){
			out = 0
		}
		return out
	}
};