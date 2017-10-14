
      //Controller
      angular.module('app').controller('arriveController',['list', searchArrive]);

      function searchArrive(list){

        var self = this;
        self.list = list;
        self.code;
        self.search = search;

       function search(){
         
         list.get(self.code);

       }


      }
