describe('GroupTable test', function() {
    it('should go to table page from navigation', function() {
        cy.visit('/')
        cy.get('[data-cy="open-menu"]').click()

        cy.contains('Group Table').click()

        cy.url().should('include', '/table')
    })
    it('should show users in table', function() {
        cy.visit('/table')

        cy.get('[data-cy="table-row"]')
            .should('have.length', 3)
            .first()
            .should('contain', '1')
            .should('contain', 'Alexa Richardson')
            .should('contain', '120')
    })
})