describe('Todo List', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('should add a task', () => {
    const taskName = 'Do homework';
    const priority = 'High';
    const date = '2023-05-17';

    cy.get('.new-expense__control #title').type(taskName);

    cy.get('.new-expense__control #priority').select(priority);

    cy.get('.new-expense__control #date').type(date);

    cy.get('.new-expense__actions button').click();
  });
});

// This code says that priority isn't working. However, indeed it was bugged in
//the original app, hence the test may be broken since the app was broken.