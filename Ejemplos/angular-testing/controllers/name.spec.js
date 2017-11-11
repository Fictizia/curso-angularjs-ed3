describe('NameController', function() {
  beforeEach(module('app'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('isValid', function() {
    var $scope, controller;

    beforeEach(function() {
      $scope = {};
      controller = $controller('NameController', {});
    });

    it('shall return false if name has less than 2 characters', function() {
      controller.name = 'a';
      var valid = controller.isValid();
      expect(valid).toEqual(false);
    });

    it('shall return false if name has more than 7 characters', function() {
      controller.name = 'iHaveALotOfCharacters';
      var valid = controller.isValid();
      expect(valid).toEqual(false);
    });

    it('shall return true if name has more than 2 and less than 7 characters', function() {
      controller.name = 'Carlos';
      var valid = controller.isValid();
      expect(valid).toEqual(true);
    });
  });
});