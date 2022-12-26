import { loginPage } from "./pageObjects/loginPage"

describe ('Delete',()=>{
    it ('Delete my board',()=>{
        cy.visit ('https://cypress.vivifyscrum-stage.com/login')
        loginPage.login('saruman@isengard.com', 'SauroN01')
        cy.get('.vs-c-list__oragnisation-item > :nth-child(2)').click()
        cy.get('.vs-c-modal--features-button > .vs-c-btn').click()
        cy.get(':nth-child(4) > .vs-c-boards-item__header').click()
        cy.get('[data-cy="board-configuration"] > span > div > .vs-c-site-logo').click()
        cy.get(':nth-child(8) > .vs-c-settings-section > .vs-c-settings-section-form > .vs-c-btn > :nth-child(2)').click()
        cy.get('.vs-u-text--right > .el-button--success').click()
    })
})