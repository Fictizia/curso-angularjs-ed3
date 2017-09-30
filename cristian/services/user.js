
      //Service
      angular.module('app').service('user', userService);

      function userService(){
        console.log('Soy un servicio');

        //Definimos Obj
        var user = {
          name: ''
        };
        return user;
      }
