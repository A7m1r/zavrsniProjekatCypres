// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('loginTroughBackend', (userName, password)=>{
    cy.request({
        method: 'POST',
        url: 'https://cypress.vivifyscrum-stage.com/login',
        body: {
            email:Cypress.env('validLoginEmail'),
            password:Cypress.env('validLoginPassword')
        }
    }).its ('body').then((response)=>{
        window.localStorage.setItem('token',response.access_token);
        window.localStorage.setItem("user_id",response.user_id)
    })
})