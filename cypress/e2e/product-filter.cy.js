describe("Filtro de productos", () => {
  it("permite filtrar productos por categoría", () => {
    cy.visit("http://localhost:8080")
    cy.get("#category").select("beauty")
    cy.contains("Essence Mascara Lash Princess").should("be.visible")
  })
})