describe('Users', function() {

  var ServiceUsers;

  var singleUser = {
    id: '2',
    name: 'Bob',
    role: 'Developer',
    location: 'New York',
    twitter: 'billybob'
  };

  beforeEach(angular.mock.module('app'));

  beforeEach(inject(function(_Users_) {
    ServiceUsers = _Users_;
  }));

  it('should exist', function() {
    expect(ServiceUsers).toBeDefined();
  });

  describe('ServiceUsers.allUsers();', function() {

    it('should exist', function() {
        var allUsers = ServiceUsers.allUsers();
        expect(allUsers).toBeDefined();
    });

    it('should return a hard-coded list of Users', function() {
        var allUsers = ServiceUsers.allUsers();
        var userList = ServiceUsers.userList;
        expect(allUsers).toEqual(userList);
    });

  });

  describe('ServiceUsers.userId()', function() {
    it('should exist', function() {
        var userId = ServiceUsers.userId;
        expect(userId).toBeDefined();
    });

    it('should return one user object if it exists', function() {
        var userId = ServiceUsers.userId;
        expect(userId('2')).toEqual(singleUser);
    });

    it('should return undefined if the user cannot be found', function() {
        var userId = ServiceUsers.userId;
        expect(userId('ABC')).not.toBeDefined();
    });

    it('should return one user async object if it exists', function() {
        var findUserBiIdAsync = ServiceUsers.findUserBiIdAsync;
        findUserBiIdAsync('2', function(result) {
            expect(result).toEqual(singleUser);
        });
    });
  });


});
