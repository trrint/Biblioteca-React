import React from 'react';
import Home from './Home';
import NavBarItem from './NavBarItem';
import { BrowserRouter as Route } from 'react-router-dom';

describe('<Home />', () => {
  beforeEach(() => {
    cy.mount(
      <Route>
        <Home />
      </Route>
    );
  });

  it('Exibir mensagem de boas-vindas com o nome do usuário', () => {
    const usuarioLogado = { nome: 'Francisco' };
    localStorage.setItem('user', JSON.stringify(usuarioLogado));
    cy.reload();
    cy.contains(`Seja Bem Vindo ${usuarioLogado.nome}`).should('be.visible');
  });

  it('Mostrar a navegação correta para as outras páginas', () => {
    cy.get("[data-cy=btn-home]").should('be.visible');
    cy.get("[data-cy=btn-livros]").should('be.visible');
    cy.get("[data-cy=btn-usuarios]").should('be.visible');
    cy.get("[data-cy=btn-livros]").click();
    cy.url().should('include', '/livros');
  });
});
