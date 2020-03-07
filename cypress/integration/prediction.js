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
    it('should load different predictions', function() {
        cy.visit('/table')
        cy.contains('Ekaterina Tankova').click()
        cy.go('back')

        cy.contains('Cao Yu').click()

        cy.get('[data-cy=user-prediction-card]')
          .should('contain', 'Cao Yu')
    })
    it('should show all groups predictions on desktop', function() {
      cy.visit('/prediction/12321')

      cy.contains('Groups Stage')
      cy.contains('9/24 Points').click()

      cy.contains('Group A')
      cy.contains('Group B')
      cy.contains('Group C')
      cy.contains('Group D')
      cy.contains('Group E')
      cy.contains('Group F')
      cy.get('[data-cy="prediction-table-row"][data-position=1]')
        .should('contain', '1')
        .should('contain', 'Italy')
        .should('contain', '+1 Point')
  })
    it('should show groups prediction on mobile', function() {
        cy.viewport('iphone-x')
        cy.visit('/prediction/12321')

        cy.contains('Groups Stage')
        cy.contains('9/24 Points').click()

        cy.get('[data-cy="prediction-table-row"][data-position=1]')
          .should('contain', '1')
          .should('contain', 'Italy')
          .should('contain', '+1 Point')

        cy.get('[data-cy="prediction-table-row"][data-position=2]')
          .should('contain', '2')
          .should('contain', 'Turkey')
          .should('contain', '0 Point')

        cy.get('[data-cy="prediction-table-row"][data-position=3]')
        .should('contain', '3')
        .should('contain', 'Wales')

        cy.get('[data-cy="prediction-table-row"][data-position=4]')
        .should('contain', '4')
        .should('contain', 'Switzerland')

        cy.contains('Group B').click()
        cy.get('[data-cy="prediction-table-row"][data-position=1]')
          .should('contain', '1')
          .should('contain', 'Belgium')
          .should('contain', '+1')
    })
})
