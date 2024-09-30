import { exampleResponse, responseData,object2  } from "./types" 

const mockData: responseData = {
  "body": {
      "fixtures": 
      [{"tag1":1},
      {"tag2": 2},
    {"isValid": true}]
    },
    "name": "Cypress Name",
    "email": "hello@cypress.io",
}

interface object3 extends  object2 {
  isValid: boolean
}

describe('template spec', () => {

  beforeEach(() => {
    cy.visit('https://example.cypress.io')
    cy.get('.dropdown-menu > li').as('dropdownItem')
  })

  it('Multiply Test Cases', (): any[] => {
    let a = [1 + 2]
    expect(a).to.eq([3])
    return a
  })

  it('Sum Test Cases', (): number => {
    let a = 1 - 2
    expect(a).to.be.eq("-1")
    return a
  })

  it('Navigation Validation', ():void => {
    
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

  it('Get Link to window', (): void => {
    cy.get('a').contains('wrap').click();
    cy.get('h1').should('contain', 'Wrap')
  })

  it('Object test case', (): void => {
    cy.fixture('example').then((file:exampleResponse) => {
      expect(file.email).to.eq("hello@cypress.io")
      expect(file.name).to.eq("Cypress Name")
      expect(file.body.fixtures[0]).to.eq("2")
    })
})
it('Object test cases 2', () => {
  cy.fixture<object3>('example').then(({name, email, body, isValid}) => {
      expect(name).to.eq(mockData.name)
      expect(email).to.eq(mockData.email)
      expect(body.fixtures[0]).to.eq(mockData.body.fixtures[0])
      expect(body.fixtures[1]).to.eq(mockData.body.fixtures[1])
      expect(isValid).to.eq(mockData.isValid);
  })
})

it('Validate', () => {
  cy.fixture<object3>('example').then((apiResponse) => {
    expect(mockData).to.deep.eq(apiResponse)
})
})
})
