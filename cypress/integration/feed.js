describe('Feed test', function() {
    it('should navigate to feed page by default', function() {
        cy.visit('/')

        cy.url().should('include', '/feed')
    })
    it('should show 2 groups', function() {
        cy.visit('/feed')

        cy.get('[data-cy="feed-group"]').should('have.length', 2)
    })
    it('should have 4 rows in each table', function() {
        cy.visit('/feed')

        cy.get('[data-cy="feed-group"]')
        .eq(0)
        .find('[data-cy="table-row"]')
        .should('have.length', 4)

        cy.get('[data-cy="feed-group"]')
        .eq(1)
        .find('[data-cy="table-row"]')
        .should('have.length', 4)
    })
    it('should show group name and position', function() {
        cy.visit('/feed')

        cy.get('[data-cy="feed-group"]')
          .eq(0)
          .should('contain', 'Yotpo')
          .should('contain', '1')

        cy.get('[data-cy="feed-group"]')
        .eq(1)
        .should('contain', 'המיזם')
        .should('contain', '6')
    })
    it('should open table of group after clicking the group name', function() {
        cy.visit('/feed')

        cy.contains('Yotpo').click()

        cy.url().should('include', '/table/12')
        cy.contains('Yotpo')
    })
    it('should open the table group after clicking the show group button', function() {
        cy.visit('/feed')
        cy.get('[data-cy="show-table-button"]')
        .eq(1)
        .click()

        cy.url().should('include', '/table/125')
    })
    it('should go back to feed clicking back', function() {
        cy.visit('/feed')
        cy.contains('Yotpo').click()

        cy.get('[data-cy="back-button"]').click()

        cy.get('[data-cy="feed-group"]').should('have.length', 2)
    })

    it('should heighlight my row', function() {
        const heighlightedColor = 'rgb(200, 230, 201)'
        cy.visit('/feed')

        cy.get('[data-cy="feed-group"]')
        .eq(0)
        .find('[data-cy="table-row"]')
        .eq(0)
        .should('have.css', 'background-color', heighlightedColor)
        
        cy.get('[data-cy="feed-group"]')
        .eq(1)
        .find('[data-cy="table-row"]')
        .eq(2)
        .should('have.css', 'background-color', heighlightedColor)
    })
})
