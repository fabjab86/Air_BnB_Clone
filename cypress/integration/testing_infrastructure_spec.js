describe('Testing', function() {
  it('tests the homepage', function() {
    cy.visit('localhost:3000')
    cy.contains('MakersBnB')
  })
})
