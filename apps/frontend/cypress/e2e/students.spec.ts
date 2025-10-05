describe('Students', () => {
  it('should display the list of students', () => {
    cy.visit('/');
    cy.get('h1').contains('Alumnos');
  });
});
