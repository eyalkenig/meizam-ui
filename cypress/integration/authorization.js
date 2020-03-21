describe('Authorization test', function() {
    it('should redirect to sign-in if not logged in error', function() {
        cy.visit('/table/666')

        cy.url().should('include', '/sign-in')
    })
})