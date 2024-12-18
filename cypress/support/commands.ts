/// <reference types="cypress" />
import '@testing-library/cypress/add-commands'
import { use } from 'chai';


const DEFAULT_USER = {
  username: 'admin',
  password: 'admin'
}
const login = (user) => {
  cy.visit('/login');
  cy.findByLabelText('username').type(user.username)
  cy.findByLabelText('password').type(user.password)
  cy.findByRole('button', {name: /Login/i}).click();
  cy.url().should('eq', Cypress.config().baseUrl + '/')
}

Cypress.Commands.add('login', (user=DEFAULT_USER) => { 
  login(user)
 })

// ***********************************************
// This example commands.ts shows you how to
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
//
declare global {
  namespace Cypress {
    interface Chainable {
      login(user?: {username: string, password: string}): Chainable<void>
    }
  }
}