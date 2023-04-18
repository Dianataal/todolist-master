describe('Todo List', () => {
  beforeEach(() => {
    cy.visit('localhost:3000') 
  })

  it('should add a task', () => {
    const taskName = 'Do homework'

    cy.get('.new-expense__control #title')
      .type(taskName)

    cy.get('.new-expense__actions button')
      .click()

      })
  })


