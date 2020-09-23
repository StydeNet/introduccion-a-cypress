/// <reference types="cypress" />

context("Hello World page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("saludar al mundo cuando no tengamos un parámetro name", () => {
    cy.get(".hello-world").should("have.text", "Holaaa world!");
  });

  it("saludar a John cuando lo recibamos como parámetro name", () => {
    cy.visit("http://localhost:3000?name=John");
    cy.get(".hello-world").should("have.text", "Holaaa John!");
  });
});
