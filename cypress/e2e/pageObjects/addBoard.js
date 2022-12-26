class AddBoard {
    get addNew() {
        return cy.get('.vs-c-my-organization__board-new')
    }
    get board() {
        return cy.get('[style="transform-origin: left center; z-index: 2145; display: none;"]')
    }

    get boardTitle() {
        return cy.get('[placeholder="Enter title..."]')
    }
    get nextBtn1() {
        return cy.get('[name="next_btn"]')
    }
    get boardType() {
        return cy.get('[name="type_scrum"]')
    }
    createBoard(name, title) {
       
        this.boardTitle.type(title)
        this.nextBtn1.click()
        this.boardType.click()
        this.nextBtn1.click()
        this.nextBtn1.click()
        this.nextBtn1.click()
        this.nextBtn1.click()
    }
}
export const addBoard = new AddBoard()
