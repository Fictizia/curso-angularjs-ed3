
      //Controller
      angular.module('app').controller('nameController', nameCtrl);
      function nameCtrl(user){

        console.log('Soy un Controller');

        var self = this;
        self.Name = '';
        self.user = user;

        self.clear = function (){
          if (confirm('estas seguro')){
            self.user.name = '';
          }
        }

      }
