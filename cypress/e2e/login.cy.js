import { loginPage } from "./pageObjects/loginPage"

describe("Login Page", ()=>{
    it ("Visit home page and log in", ()=>{
        cy.visit ('https://cypress.vivifyscrum-stage.com/login')
        loginPage.login('saruman@isengard.com', 'SauroN01')
  })})
