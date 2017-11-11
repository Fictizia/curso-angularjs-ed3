angular.module('app').controller('PasswordCtrlr', [PasswordCtrlr]);

  function PasswordCtrlr(){

      var self = this;

      self.password = '';
      self.strength = '';

      self.grade = grade;

      function grade(){

        var size = self.password.length;

        if (size > 8) {
          self.strength = 'strong';
        } else if (size > 3) {
          self.strength = 'medium';
        } else {
          self.strength = 'weak';
        }

      }
}





/*
angular.module('app').controller('PasswordCtrlr', function($scope) {

  $scope.password = '';
  $scope.grade = function() {
    var size = $scope.password.length;
    if (size > 8) {
      $scope.strength = 'strong';
    } else if (size > 3) {
      $scope.strength = 'medium';
    } else {
      $scope.strength = 'weak';
    }
  };
});
*/
