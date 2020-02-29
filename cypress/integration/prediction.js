describe('UserPrediction test', function() {
    it('should go to prediction page from table', function() {
        cy.visit('/table')

        cy.contains('Ekaterina Tankova').click()

        cy.url().should('include', '/prediction/12321')
    })
    it('should load prediction info', function() {
        cy.visit('/prediction/12321')

        cy.get('[data-cy=user-prediction-card]')
          .should('contain', 'Ekaterina Tankova')
          .should('contain', 'Points: 102')
          .should('contain', 'Position: 2 / 3')
          .should('contain', 'France')
        cy.get('[data-cy=user-prediction-card-winning-flag]').find('img').should('have.attr', 'src').should('include', 'fra.png')
        cy.get('[data-cy=user-prediction-card-user-avatar]').find('img').should('have.attr', 'src').should('include', 'meizam-files/profile-pics')
    })
})