/// <reference types="cypress" />

// -- Convert currencies --
Cypress.Commands.add("convert", (from, to, amount) => {
  cy.get('[data-test="amount-field"]').type(amount);
  cy.get('[data-test="from-field"]')
    .type(from)
    .type("{downarrow}")
    .type("{enter}");

  cy.get('[data-test="to-field"]').type(to).type("{downarrow}").type("{enter}");

  cy.get('[data-test="convert-button"]').click();
});

declare global {
  namespace Cypress {
    interface Chainable {
      convert(from: string, to: string, amount: number): Chainable<void>;
    }
  }
}
