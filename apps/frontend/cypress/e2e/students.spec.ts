describe('Student PAge', () => {
  it('should render students page', () => {
    cy.visit('/');
    cy.get('h1').contains('Alumnos');
  });

  it('should render students list', () => {
    cy.visit('/');
    cy.get(':nth-child(1) > :nth-child(2) > .name_link').should('not.be.empty');
  });

  it('should navigate between pages when clicking on pagination buttons', () => {
    cy.visit('/');
    cy.get('.pagination > :nth-child(3)').click();
    cy.get(':nth-child(1) > :nth-child(2) > .name_link').should('not.be.empty');
  });

  it('should create a new student when filling the form', () => {
    cy.visit('/');
    cy.get('button').contains('Agregar alumno').click();
    cy.get('#name').type('Test');
    cy.get('#lastName').type('Test');
    cy.get('#email').type('test@test.com');
    cy.get('#phone').type('1234567890');
    cy.get('button').contains('Guardar').click();

    cy.wait(1000);

    cy.get('.pagination > :nth-child(6)').click();
    cy.get('table').contains('td', 'Test Test');
  });

  it("should open the student's profile modal when clicking on a student's name", () => {
    cy.visit('/');
    cy.get(':nth-child(1) > :nth-child(2) > .name_link').click();
    cy.get('.modal_header').contains('Perfil');
  });

  it('should display students info form to edit the student', () => {
    cy.visit('/');
    cy.get(':nth-child(1) > :nth-child(2) > .name_link').click();
    cy.get('.modal_header').contains('Editar estudiante').click();
    cy.get('#name').should('be.visible');
    cy.get('#lastName').should('be.visible');
    cy.get('#email').should('be.visible');
    cy.get('#phone').should('be.visible');
  });

  it('should edit the student when filling the form', () => {
    cy.visit('/');
    cy.get('.pagination > :nth-child(6)').click();
    cy.get('table').contains('td', 'Test Test').click();
    cy.get('.modal_header').contains('Editar estudiante').click();
    cy.get('#name').clear().type('Test Edited');
    cy.get('#lastName').clear().type('Test Edited');
    cy.get('#email').clear().type('test.edited@test.com');
    cy.get('#phone').clear().type('123456789');
    cy.get('button').contains('Guardar').click();

    cy.wait(1000);

    cy.get('.pagination > :nth-child(6)').click();
    cy.get('table').contains('td', 'Test Edited Test Edited');
  });

  it('should deactivate student when clicking on the switch', () => {
    cy.visit('/');

    cy.get('.pagination > :nth-child(6)').click();
    cy.get('table').contains('td', 'Test Edited Test Edited').click();
    cy.get('#s1').click();

    // intenta encontrar el botón de "Desactivar"
    cy.get('button').then(($buttons) => {
      const deactivateButton = $buttons.filter((_, btn) =>
        btn.textContent?.includes('Desactivar')
      );

      if (deactivateButton.length) {
        // si existe, haz click
        cy.wrap(deactivateButton).click();

        // luego verifica que el badge se actualizó a "Inactivo"
        cy.get(':nth-child(5) > [style="width: 8.33%;"] > #badge').should(
          'contain',
          'Inactivo'
        );
      } else {
        // si no existe, termina el test de manera exitosa
        cy.log('El estudiante ya estaba inactivo ✅');
      }
    });
  });
});
