Cypress.Commands.add('login', (
    user = Cypress.env('user_name'),
    password = Cypress.env('user_password'),
  ) => {
    const login = () => {  
  
      cy.get('#Email').type(user)
      cy.get('#Password').type(password)
      
    }
  
    // login()
  })
  