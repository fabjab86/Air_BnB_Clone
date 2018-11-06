describe('Tests viewing a space', function() {

  it('and views a list of spaces', function() {
    cy.visit('localhost:3000')
    cy.get('#addSpace').click() //or cy.contains('Add space').click()
    cy.get('#owner').type('Daniel')
    cy.get('#address').type("52 commercial street")
    cy.get('#price').type("5.00")
    cy.get('#title').type("New Room in Amazing area")
    cy.contains('Submit').click()
    cy.visit('localhost:3000/all')
    cy.contains('New Room in Amazing area')
  })

})
