/// <reference types="cypress" />

context("Hello World page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get(".hello-world").as("HelloWorldMessage");
  });

  it("saludar al mundo cuando no tengamos un parámetro name", () => {
    cy.get("@HelloWorldMessage").should("have.text", "Holaaa world!");
  });

  it("saludar a John cuando lo recibamos como parámetro name", () => {
    cy.visit("http://localhost:3000?name=John");
    cy.get("@HelloWorldMessage").should("have.text", "Holaaa John!");
  });
});

// README:

// // HTML
// <button type="submit">Enviar</button>
// // ________

// // Variables
//   const buttonText = cy.get('button').text()

//   // no funciona
//   expect(buttonText).equal('Enviar')

//   // funciona
//   const button = cy.get('button')
//   button.should('have.text', 'Enviar')
//   button.should('have.attr', 'type', 'submit')

//   context('description suite', () => {
//     let button;
//     beforeEach(() => {
//       button = cy.get('button')
//     })

//     it('description test', () => {
//       button.should('have.text', 'Enviar')
//     })
//     it('description test 2', () => {
//       button.should('have.attr', 'type', 'submit')
//     })
//   })
// // ________

// // Then
//   cy.get('button').then(($btn) => {
//     expect($btn.text()).equal('Enviar')
//     expect($btn.attr('type')).equal('submit')
//   })

//   context('description suite', () => {
//     it('description test', () => {
//       cy.get('button').then(($btn) => {
//         expect($btn.text()).equal('Enviar')
//       })
//     })

//     it('description test 2', () => {
//       cy.get('button').then(($btn) => {
//         expect($btn.attr('type')).equal('submit')
//       })
//     })
//   })
// // ________

// // Alias
//   cy.get('button').as('Button')
//   this.Button.should('have.text', 'Enviar')

//   context('description suite', () => {
//     beforeEach(() => {
//       cy.get('button').as('Button')
//     })

//     it('description test', function() {
//       this.Button.should('have.text', 'Enviar')
//     })

//     it('description test 2', () => {
//       cy.get('@Button').should('have.text', 'Enviar')
//     })
//   })
// // ________
