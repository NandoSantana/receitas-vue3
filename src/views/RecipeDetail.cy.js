import RecipeDetail from './RecipeDetail.vue'

describe('<RecipeDetail />', () => {
  it('renders', () => {
    beforeEach(() => {
        cy.request("GET", 'http://localhost:8000/api/categories');
        cy.request('GET', 'http://localhost:8000/api/recipes?page=1'); // resetar o banco
        
         // 1. Visita a página inicial
     
    });
    // see: https://on.cypress.io/mounting-vue
    cy.mount(RecipeDetail)
  })
})