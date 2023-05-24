describe('Todo List Application', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); 
  });

  it('should display the todo list', () => {
    cy.get('.todo-list').should('have.length', 1);
    cy.contains('JS task').should('be.visible');
    cy.contains('high').should('be.visible');
    cy.contains('10').should('be.visible');
  });

  it('Add Task button should work', () => {
    cy.contains('Add Task').click();
  });

  it('should have a fillable form, new todo should be in list', () => {
    cy.contains('Add new Todo').click();

    cy.contains('Title').next('input').type('sneakers');
    cy.contains('price').next('input').type('500');
    cy.contains('Date').next('input').type('2023-12-12');

    cy.contains('Add Todo').click();

    cy.get('.todo-list').should('have.length', 4);
    cy.contains('sneakers');
    cy.contains('500');
    cy.contains('December');
    cy.contains('12');
    cy.contains('2023');
  });

  it('the filter should filter by year', () => {
    cy.contains('Filter by year').siblings('select').select('2023');

    cy.get('.todo-list').should('have.length', 2);
    cy.contains('JS task').should('be.visible');
    cy.contains('high').should('be.visible');
    cy.contains('10').should('be.visible');

    cy.get('.todo-list').should('have.length', 2);
    cy.contains('MySQL task').should('be.visible');
    cy.contains('medium').should('be.visible');
    cy.contains('10').should('be.visible');

    cy.contains('Filter by year').siblings('select').select('2024');

    cy.get('.todo-list').should('have.length', 1);
    cy.contains('WordPress task').should('be.visible');
    cy.contains('low').should('be.visible');
    cy.contains('5').should('be.visible');

    cy.contains('Filter by year').siblings('select').select('2025');
    cy.contains('No todos found').should('be.visible');
  });
});
