angular.module('app').controller('NameController', [NameController]);

function NameController() {
  var self = this;

  // Properties
  self.name = '';

  // Methods
  self.isValid = isValid;

  function isValid() {
    var size = self.name.length;
    if (size < 2 || size > 7) {
      return false;
    } else {
      return true;
    }
  }
}