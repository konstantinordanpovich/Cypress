describe('template spec', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io')
    cy.get('.dropdown-menu > li').as('dropdownItem')
  })

  it('Multiply Test Cases', () => {
    let a = 1 + 2
    expect(a).to.be.eq(3)
  })

  it('Sum Test Cases', () => {
    let a = "1" - "2"
    expect(a).to.be.eq("-1")
  })

  it('Navigation Validation', () => {
    
    cy.get('.dropdown-toggle').as('dropdown')
      .click()
    
    cy.get('.dropdown-menu > li').as('dropdownItem')
      .contains('Traversal')
      .click()
      cy.contains('Traversal')
    cy.get('@dropdown')
      .click()

    cy.get('@dropdownItem')
      .contains('Window')
      .click()
      cy.contains('Window')

    cy.get('dropdown')
      .click()

    cy.get('@dropdownItem')
      .contains('Aliasing')
      .click()
  })

  it('Get Link to window', () => {
    cy.get('a').contains('wrap').click();
    cy.get('h1').should('contain', 'Wrap')
  })

  it('Object test case', () => {
    cy.fixture('example').then(file => {
      expect(file.email).to.eq("hello@cypress.io")
      expect(file.name).to.eq("Cypress Name")
      expect(file.body.fixture).to.eq("fixture")
    })
})
  })
