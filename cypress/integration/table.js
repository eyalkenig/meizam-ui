describe('GroupTable test', function() {
    it('should go to table page from navigation', function() {
        cy.visit('/')
        cy.get('[data-cy="open-menu"]').click()

        cy.contains('Group Table').click()

        cy.url().should('include', '/table')
    })
    it('should show users in table', function() {
        cy.visit('/table/12')

        cy.get('[data-cy="table-row"]')
            .should('have.length', 4)
            .first()
            .should('contain', '1')
            .should('contain', 'Ekaterina Tankova')
            .should('contain', '120')
            .get('[data-cy=winner-flag]').find('img').should('have.attr', 'src').should('include', 'bel.png')
    })
    it('should show group display name', function() {
        cy.visit('/table/12')

        cy.contains('Yotpo')
    })
    it('should show users in table according to group id param', function() {
        cy.visit('/table/125')

        cy.get('[data-cy="table-row"]')
            .should('have.length', 12)
            .first()
            .should('contain', 'עידן עמדי')
    })
    it('should search users in table', function() {
        cy.visit('/table/12')

        cy.get('[data-cy="search-user"] [data-cy="search-input"]').click().type('ao')

        cy.get('[data-cy="table-row"]')
            .should('have.length', 2)
            .first()
            .should('contain', '3')
            .should('contain', 'Cao Yu')

        cy.get('[data-cy="search-clear"]').click()
        cy.get('[data-cy="table-row"]')
            .should('have.length', 4)
    })
    it('should show no user found message', function() {
        cy.visit('/table/12')

        cy.get('[data-cy="search-user"] [data-cy="search-input"]').click().type('aooo')

        cy.get('[data-cy="error-message"]')
        .should('contain', 'Oops... no matching users')
    })
})