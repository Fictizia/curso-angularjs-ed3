
      //Controller
      angular.module('app').controller('nameController',['user', nameCtrl]);

      function nameCtrl(user){

        console.log("");

        var self = this;
        self.Name = '';
        self.user = user;

        self.clear = function (){
          if (confirm('estas seguro')){
            self.user.name = '';
          }
        }

      }
