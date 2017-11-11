
angular.module('app').service('Users', [ListUsers]);

    function ListUsers(){


        var userList = [
          {
            id: '1',
            name: 'Jane',
            role: 'Designer',
            location: 'New York',
            twitter: 'gijane'
          },
          {
            id: '2',
            name: 'Bob',
            role: 'Developer',
            location: 'New York',
            twitter: 'billybob'
          },
          {
            id: '3',
            name: 'Jim',
            role: 'Developer',
            location: 'Chicago',
            twitter: 'jimbo'
          },
          {
            id: '4',
            name: 'Bill',
            role: 'Designer',
            location: 'LA',
            twitter: 'dabill'
          }
        ];

        var Users =
            {
                userList : userList,
                allUsers : allUsers,
                userId: userId,
                findUserBiIdAsync : findUserBiIdAsync

            };

        return Users;

        // Users.all = function() {
        //   return userList;
        // };

        function allUsers(){
            return userList;
        }

        // Users.findById = function(id) {
        //   return userList.find(function(user) {
        //     return user.id === id;
        //   });
        // };

        function userId(id){
            return userList.find(function(user){
                return user.id === id;
            });
        }

        // Users.findByIdAsync = function(id, cb) {
        //   var a = userList.find(function(user) {
        //     return user.id === id;
        //   });
        //   cb(a);
        // };

        function findUserBiIdAsync(id, callback){
            var usersAsync = userList.find(function(user){
                return user.id === id;
            });
            callback(usersAsync);
        }

    }
