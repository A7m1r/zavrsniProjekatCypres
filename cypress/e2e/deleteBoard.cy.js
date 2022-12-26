import { loginPage } from "./pageObjects/loginPage"

describe ('Delete',()=>{
    it ('Delete my board',()=>{
        cy.visit ('https://cypress.vivifyscrum-stage.com/login')
        loginPage.login('saruman@isengard.com', 'SauroN01')
        cy.get('.vs-c-list__oragnisation-item > :nth-child(2)').click()
        cy.get('.vs-c-modal--features-button > .vs-c-btn').click()
        cy.get(':nth-child(4) > .vs-c-boards-item__header').click()
        cy.get(':nth-child(2) > .vs-c-site-logo').click()
        cy.wait(2000)
    })
})