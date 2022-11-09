Cypress.Commands.add(
    'loginThroughForm',
    (username = 'dhis2Username', password = 'dhis2Password', baseUrl = 'dhis2BaseUrl') => {
        cy.visit('/').then(() => {
            cy.get('#server').type(Cypress.env(baseUrl));
            cy.get('#j_username').type(Cypress.env(username));
            cy.get('#j_password').type(Cypress.env(password));
            cy.get('form').submit();
        });

        cy.get('[data-test="6psolution"]', { timeout: 60000 })
            .should('exist');
    },
);
