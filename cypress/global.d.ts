declare namespace Cypress {
  interface Chainable {
    /**  * Custom command
     * @example cy.console('log')
     *  */
    console(method: string): Chainable<any>;
    /**  * Custom command to select DOM element by data-cy attribute.
     * @example cy.dataCy('greeting')
     *  */
    dataCy(value: string): Chainable<any>;
  }
}
