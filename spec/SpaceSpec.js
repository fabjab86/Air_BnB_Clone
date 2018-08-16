const Space = require('../src/space.js')

describe('Spaces', function(){

  var space;

  beforeEach(function(){
    space = new Space();
  });

  describe('adding', function(){
    it('should let an owner add a space to the database', function(){
      var query = 'INSERT INTO listings (title, listing_desc, owner, price, address) VALUES ($1, $2, $3, $4, $5);'
      var params = ["Test title", "this is a house", "Stephanie", 20000, "12 Cheese Land"];
      space.addSpace(query, params);
      expect(space.checkDatabase()).toContain("Test title");
    });
  });

  describe('established connection to the databse', function(){
    it('returns true if connected', function(){
      expect(space.isConnected()).toEqual(true);
    });
  });

  describe('views all spaces', function(){
    it('checks if user can see list of listings', function(){
      space.viewAllSpaces();
      expect(space.viewAllSpaces()).toEqual(space.checkDatabase());
    });
  });
});
