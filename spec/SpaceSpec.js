describe('Airbnb', function(){

  var space;

  beforeEach(function(){
    space = new Space();
  });

  describe('adding', function(){

    it('should let an owner add a space to the database', function(){
      space.addSpace(('INSERT INTO listings (title, listing_desc, owner, price, address) VALUES ($1, $2, $3, $4, $5);'),("Makers Academy", "A coding bootcamp", "Daniel", 10, 7777777777));
      expect(space.viewSpaces()).toContain("14 windmill road SW18 2EU");
    });

  });
});
  // describe('viewing', function(){
  //
  //   it('should let a user view all the spaces available for leasing', function(){
  //     space.addSpace("14 windmill road SW18 2EU", 10, "Daniel", 7777777777);
  //     expect(space.viewSpaces()).toContain("14 windmill road SW18 2EU");
  //   });
  //
  // });
