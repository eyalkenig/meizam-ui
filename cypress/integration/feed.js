describe('Feed test', function() {
    it('should navigate to feed page by default', function() {
        cy.visit('/')

        cy.url().should('include', '/feed')
    })
    it('should show 2 groups', function() {
        cy.visit('/feed')

        cy.get('[data-cy="feed-group"]').should('have.length', 2)
    })
    it('should show group name and position', function() {
        cy.visit('/feed')

        cy.get('[data-cy="feed-group"]')
          .first()
          .should('contain', 'המיזם')
          .should('contain', '2')
    })
    it('should open table of group', function() {
        cy.visit('/feed')

        cy.contains('Yotpo').click()

        cy.url().should('include', '/table')
        cy.contains('Yotpo')
    })
})