describe('PasswordCtrlr', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.grade', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('PasswordCtrlr', { $scope: $scope });
    });

    it('strength = "strong" if >8 chars', function() {
      $scope.password = 'longerthaneightchars';
      $scope.grade();
      expect($scope.strength).toEqual('strong');
    });

    it('strength == "weak" if <3 chars', function() {
      $scope.password = 'a';
      $scope.grade();
      expect($scope.strength).toEqual('weak');
    });

    // No test for medium, becouse of yes.
    
  });
});