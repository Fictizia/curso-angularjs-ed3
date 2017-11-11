describe('PasswordCtrlr', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('grade', function() {
    var controller;

    beforeEach(function() {
      controller = $controller('PasswordCtrlr', { });
    });

    it('strength = "strong" if >8 chars', function() {
      controller.password = 'longerthaneightchars';
      var grade = controller.grade();
      expect(controller.strength).toEqual('strong');
    });

    it('strength == "weak" if <3 chars', function() {
      controller.password = 'a';
      var grade = controller.grade();
      expect(controller.strength).toEqual('weak');
    });

    // No test for medium, becouse of yes.

  });
});
