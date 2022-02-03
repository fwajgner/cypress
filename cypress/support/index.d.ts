/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute.
     * @example cy.console('info', 'log')
     */
    console(method: string): Chainable<Element>;
  }
}
