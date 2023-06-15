import React from 'react'
import Login from './Login'
import { BrowserRouter as Route } from 'react-router-dom';

describe('<Login />', () => {
  beforeEach(() => {
    cy.mount(
      <Route>
        <Login />
      </Route>
    )
  });

  it('Testar botão de limpar', () => { 
    cy.get("[data-cy=input-username]").should('be.visible').type("admin");
    cy.get("[data-cy=input-senha]").should('be.visible').type("1234");
    cy.get("[data-cy=btn-reset]").should('be.visible').click();
  })

  it('Fazer login no site', () => {
    cy.get("[data-cy=input-username]").should('be.visible').type("admin");
    cy.get("[data-cy=input-senha]").should('be.visible').type("1234");
  
    cy.get("[data-cy=btn-entrar]").should('be.visible').click();
  
    cy.url().should('include', '/home');

    cy.get("[data-cy=btn-reset]").should('be.visible').click();
  });
  
  it('Teste de login sem credênciais', () => {
  
    cy.get("[data-cy=btn-entrar]").should('be.visible').click();
  
    cy.get('.toast-error').should('be.visible');
  });
  
});
