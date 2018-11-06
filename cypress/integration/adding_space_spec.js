describe('Tests adding a space', function() {
  it('and has a header "Add a space"', function() {
    cy.visit('localhost:3000/add-space')
    cy.contains('Add a Space')
  })
  it('and submitting a new space', function() {
    cy.visit('localhost:3000')
    cy.get('#addSpace').click() //or cy.contains('Add space').click()
    cy.contains('Add a Space')
    cy.get('#owner').type('Daniel')
    cy.get('#address').type("52 commercial street")
    cy.get('#price').type("5.00")
    cy.get('#title').type("Amazing room")
    cy.contains('Submit').click()
    cy.contains('Your new space has been added.')
  })

})
