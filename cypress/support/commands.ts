// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**  * Custom command
 * @example cy.console('log')
 *  */
Cypress.Commands.add(
  'console',
  {
    prevSubject: true,
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (subject: any, method: string) => {
    // the previous subject is automatically received
    // and the commands arguments are shifted

    // allow us to change the console method used
    method = method || 'log';

    // log the subject to the console
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    console[method]('The subject is', subject);

    // whatever we return becomes the new subject
    // we don't want to change the subject so
    // we return whatever was passed in
    return subject;
  }
);

/**  * Custom command to select DOM element by data-cy attribute.
 * @example cy.dataCy('greeting')
 *  */
Cypress.Commands.add('dataCy', (value: string) => {
  return cy.get(`[data-cy=${value}]`);
});
