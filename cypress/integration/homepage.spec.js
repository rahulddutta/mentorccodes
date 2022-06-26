describe("Renders the homepage", () => {
    it("renders correctly", () => {
        cy.visit("/")
        cy.get("#container").should("exist")
    })
})

