import { addBoard } from "./pageObjects/addBoard"
import { loginPage } from "./pageObjects/loginPage"

describe ('New Board',()=>{
    it('Adding new board',()=>{
        cy.visit('https://cypress.vivifyscrum-stage.com/login')
        loginPage.login('saruman@isengard.com', 'SauroN01')
        addBoard.addNew.click()
        addBoard.createBoard('Almir','Almir')
    })})