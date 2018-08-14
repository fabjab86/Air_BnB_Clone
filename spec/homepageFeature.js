var chai = require('chai');
var expect = chai.expect;

describe('homepage', function () {

  it('should be a welcome page', function(done) {
    browser.url('http://localhost:3000')
    browser.getText('body', function(err, text) {
    expect(page).to.have.text('MakersBnB')
      })
      .call(done);
    });

});
