describe('CreateGroup test', () => {
	it('should go to create group page from navigation', () => {
		cy.visit('/create-group');
		cy.get('[data-cy="create-group-header"]').should('contain', 'Create Group');
	});
});
