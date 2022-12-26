class AddBoard {
    get addNew() {
        return cy.get('.vs-c-my-organization__board-new')
    }
  
    get boardTitle() {
        return cy.get('[placeholder="Enter title..."]')
    }
    get nextBtn() {
        return cy.get('[name="next_btn"]')
    }
    get boardType() {
        return cy.get('[name="type_scrum"]')
    }
    createBoard(name, title) {
       
        this.boardTitle.type(title)
        this.nextBtn.click()
        this.boardType.click()
        this.nextBtn1.click()
        this.nextBtn1.click()
        this.nextBtn1.click()
        this.nextBtn1.click()
    }
}
export const addBoard = new AddBoard()
