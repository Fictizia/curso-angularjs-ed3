angular.module('app').filter('minutes', [minutesFilter]);

  function minutesFilter(input) {
    return function(input){

      var out= input / 60;
      
      if(isNaN(out)){
        out = 0;
      }
      return out;
    };
  }
