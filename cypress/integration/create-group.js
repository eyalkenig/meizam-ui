describe('CreateGroup test', () => {
	it('should go to create group page from navigation', () => {
		cy.visit('/create-group');
		cy.get('[data-cy="create-group-header"]').should('contain', 'Create Group');
	});

	it('should show error message if POST failed', () => {
		cy.get('[data-cy="group-name-input"]').type('error');
		cy.get('[data-cy="create-group-button"]').click();
		cy.get('[data-cy="create-group-container"]').should(
			'contain.text',
			'Something went wrong'
		);
	});
});
