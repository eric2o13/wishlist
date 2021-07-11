describe('Wish list', () => {

    before(() => {
        cy.clearLocalStorageSnapshot();
    });

    beforeEach(() => {
        cy.restoreLocalStorage();
        cy.visit("/");
    });

    afterEach(() => {
        cy.saveLocalStorage();
    });

    it('Can open', () => {

        cy.visit('/');

        cy.get('.favorites-button').click();

        cy.get('.app-wish-list-component')
            .should('have.length', 1);

    });

    it('Can close', () => {

        cy.get('.favorites-button').click()
        cy.get('.app-wish-list-component')
            .should('have.length', 0);

    });

    it('Can contain wish list items', () => {

        cy.get('.add-to-wish-list-btn')
            .as('list');

        cy.get('@list')
            .first()
            .click();

        cy.get('@list')
            .should('have.length.greaterThan', 0);

    });

    it('Can update the quantity of wish list items', () => {

        cy.get('.favorites-button').click();

        cy.get('.increase-button')
            .as('list');

        cy.get('@list')
            .first()
            .click()
            .click();

        cy.get('.favorites-button .count')
            .should('contain', 3);

    });

    it('Wish list items persist between browser sessions', () => {

        cy.reload();

        cy.get('.favorites-button .count')
            .should('contain', 3);

    });

    it('Can remove wish list items', () => {

        cy.get('.remove-button')
            .as('list');

        cy.get('@list')
            .first()
            .click();

        cy.get('@list')
            .should('have.length', 0);

        cy.get('.favorites-button .count')
            .should('contain', 0);

    });


});
