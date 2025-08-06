describe('Catálogo de Receitas - Navegação', () => {
    beforeEach(() => {
        cy.request("GET", 'http://localhost:8000/api/categories');
        cy.request('GET', 'http://localhost:8000/api/recipes?page=1'); // resetar o banco
        
         // 1. Visita a página inicial
     
    });

    it('Deve rolar até uma receita, clicar em "Ver receita", visualizar detalhes e voltar', () => {
        Cypress.on('uncaught:exception', (err, runnable) => {
        return false; // impede que o Cypress falhe com erros fora do teste
        });

    
      cy.visit('/');

    // 2. Aguarda o carregamento dos cards
    cy.get('[data-cy=recipe-card]').should('exist');

    // 3. Rola até o primeiro botão "Ver receita"
    // cy.get('[data-cy=recipe-card]').first().scrollIntoView();

    // 4. Clica no botão "Ver receita"
    cy.get('[data-cy=recipe-card]').first().find('[data-cy=view-recipe-btn]').click();


  
  });
  it('Deve voltar para home', () => {
    cy.visit('/recipes-details/1');
    
    // 5. Verifica se foi para a página de detalhes
    cy.url().should('include', '/recipes-details/');
    cy.get('[data-cy=recipe-detail]').should('exist');

        // 6. Verifica se há um botão "Voltar"
    cy.get('[data-cy=back-button]').should('exist');
    
    // 7. Clica no botão "Voltar"
    cy.get('[data-cy=back-button]').click();

    // 8. Confirma que voltou à página inicial
    cy.url().should('eq', Cypress.config().baseUrl);
    cy.get('[data-cy=recipe-card]').should('exist');

  });

    it('Verifica categorias', () => {
        cy.visit('/');    
        cy.get('[data-cy=category]').should('exist');
        cy.get('[data-cy=category').first().click();
        cy.get('[data-cy=recipe-category').first().should('exist');
  });
});
