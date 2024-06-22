import{Given, When, Then} from 'cypress-cucumber-preprocessor/steps'

Given("que estou na pagina de login", () => {
    cy.visit("https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F")
})

When("eu preencho meu login e senha", () => {
    cy.login()     
       
})

Then("sou redirecionado a pagina inicial", () => {
    cy.get('.button-1').click()
    cy.get('.brand-image-xl')
})