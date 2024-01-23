Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {

    cy.get('#firstName')
        .should('be.visible')
        .type('David')
        .should('have.value', 'David')

    cy.get('#lastName')
        .should('be.visible')
        .type('Costa')
        .should('have.value', 'Costa')

    cy.get('#email')
        .should('be.visible')
        .type('david@teste.com')
        .should('have.value', 'david@teste.com')

    cy.get('#open-text-area')
        .type('testeando um envio de requisição')

    cy.get('button[type="submit"]').click()

    //cy.get('.success').should('be.visible', 'Mensagem enviada com sucesso.')

})