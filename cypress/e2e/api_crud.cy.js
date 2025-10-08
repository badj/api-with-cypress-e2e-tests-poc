describe('CRUD API Tests with Swagger UI check', () => {
    const baseURL = 'http://localhost:3333';

    it('Swagger UI loads', () => {
        cy.visit(`${baseURL}/api-docs`);
        cy.contains('Item API').should('be.visible');
    });

    let createdItemId;

    it('Create an item', () => {
        cy.request('POST', `${baseURL}/items`, { name: 'Test Item' })
            .its('body')
            .then((body) => {
                createdItemId = body.id;
                expect(body).to.have.property('name', 'Test Item');
            });
    });

    it('Read all items', () => {
        cy.request('GET', `${baseURL}/items`)
            .its('body')
            .should('be.an', 'array')
            .and('have.length.gte', 1);
    });

    it('Read a single item', () => {
        cy.request('GET', `${baseURL}/items/${createdItemId}`)
            .its('body')
            .should('have.property', 'id', createdItemId);
    });

    it('Update an item', () => {
        cy.request('PUT', `${baseURL}/items/${createdItemId}`, { name: 'Updated Item' })
            .its('body')
            .should('have.property', 'name', 'Updated Item');
    });

    it('Delete an item', () => {
        cy.request('DELETE', `${baseURL}/items/${createdItemId}`).its('status').should('eq', 204);
    });

    it('Verify item deleted', () => {
        cy.request({ url: `${baseURL}/items/${createdItemId}`, failOnStatusCode: false })
            .its('status')
            .should('eq', 404);
    });
});
