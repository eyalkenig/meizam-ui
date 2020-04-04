describe('UserPrediction test', function() {
    it('should go to prediction page from table', function() {
        cy.visit('/table/12')

        cy.contains('Ekaterina Tankova').click()

        cy.url().should('include', '/prediction/62126')
    })
    it('should load prediction info', function() {
        cy.visit('/prediction/62126')

        cy.get('[data-cy=user-prediction-card]')
          .should('contain', 'Ekaterina Tankova')
          .should('contain', 'Points: 120')
          .should('contain', 'Position: 1 / 4')
          .should('contain', 'Belgium')
        cy.get('[data-cy=user-prediction-card-winning-flag]').find('img').should('have.attr', 'src').should('include', 'bel.png')
        cy.get('[data-cy=user-prediction-card-user-avatar]').find('img').should('have.attr', 'src').should('include', 'meizam-files/profile-pics')
    })
    it('should load different predictions', function() {
        cy.visit('/table/12')
        cy.contains('Ekaterina Tankova').click()
        cy.go('back')

        cy.contains('Cao Yu').click()

        cy.get('[data-cy=user-prediction-card]')
          .should('contain', 'Cao Yu')
    })
    it('should show all groups predictions on desktop', function() {
      cy.visit('/prediction/12321')

      cy.contains('Groups Stage')
      cy.contains('12/24 Points').click()

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
        cy.contains('12/24 Points').click()

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
    it('should show all knockout predictions on desktop', function() {
      cy.visit('/prediction/12321')

      cy.contains('Knockout')
      cy.contains('67/148 Points').click()

      cy.contains('Top 16')
      cy.contains('Top 8')
      cy.contains('Top 4')
      cy.contains('Top 2')
      cy.contains('Winner')
      cy.get('[data-cy="stage Top 16"]')
        .should('contain', 'Italy')
        .should('contain', '+2 Points')
      cy.get('[data-cy="stage Top 8"]')
        .should('contain', 'Italy')
        .should('contain', '+4 Points')
      cy.get('[data-cy="stage Top 4"]')
        .should('contain', 'Turkey')
        .should('contain', '0 Points')
      cy.get('[data-cy="stage Top 2"]')
        .should('contain', 'Belgium')
        .should('contain', '+8 Points')
      cy.get('[data-cy="stage Winner"]')
        .should('contain', 'Belgium')
        .should('contain', '+10 Points')
    })
    it('should show knockout predictions on mobile', function() {
      cy.viewport('iphone-x')
      cy.visit('/prediction/12321')

      cy.contains('Knockout')
      cy.contains('67/148 Points').click()

      cy.get('[data-cy="stage Top 16"]')
        .should('contain', 'Italy')
        .should('contain', '+2 Points')

      cy.contains('Top 8').click()
      cy.get('[data-cy="stage Top 8"]')
        .should('contain', 'Italy')
        .should('contain', '+4 Points')
    })
    it('should show potential points if predictions not decided', function() {
      cy.visit('/prediction/3537')

      cy.contains('0/148 Points').click()

      cy.get('[data-cy="stage Top 2"]')
        .should('contain', 'Germany')
        .should('contain', '8 Points')
    })
})
