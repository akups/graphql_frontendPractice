/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  // https://on.cypress.io/interacting-with-elements

  it("Shows validation errors for empty input", () => {
    // https://on.cypress.io/type
    // cy.get("[data-cy=orderNameInput]").type("fake");
    // cy.get("[data-cy=orderPriceInput]").type("12");
    cy.get("[data-cy=submitButton]").click();
    cy.get("[data-cy=error-message-price]").should("be.visible");
    cy.get("[data-cy=error-message-name]").should("be.visible");
  });

  it("Shows validation errors for invalid input", () => {
    cy.get("[data-cy=orderNameInput]").type("fake");
    cy.get("[data-cy=submitButton]").click();
    cy.get("[data-cy=error-message-name]").should("be.visible");
  });

  it("Form submission works", () => {
    // https://on.cypress.io/type
    cy.get("[data-cy=orderNameInput]").type("fake@email.com");
    cy.get("[data-cy=orderPriceInput]").type("12");
    cy.get("[data-cy=submitButton]").click();
    cy.get("[data-cy=successMessage]").should("be.visible");
    //cy.contains("[data-cy=submitButton]").click();
  });
});
