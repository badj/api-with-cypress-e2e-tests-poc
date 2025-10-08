describe('CRUD API Tests with Swagger UI check', () => {
    const baseURL = 'http://localhost:3333';

    it('The Swagger API Doc loads', () => {
        cy.visit(`${baseURL}/api-docs`);
        cy.contains('Item API').should('be.visible');
        cy.contains('A Node.JS Express API with Swagger API docs and Jest SuperTest Unit tests').should('be.visible');
    });

    let createdItemId;

    it('POST to create an item ➝ Creates Test Item', () => {
        cy.request('POST', `${baseURL}/items`, { name: 'Test Item' })
            .its('body')
            .then((body) => {
                createdItemId = body.id;
                expect(body).to.have.property('name', 'Test Item');
            });
    });

    it('GET to Read all items ➝ Returns items', () => {
        cy.request('GET', `${baseURL}/items`)
            .its('body')
            .should('be.an', 'array')
            .and('have.length.gte', 1);
    });

    it('GET by ID ➝ Returns a single item', () => {
        cy.request('GET', `${baseURL}/items/${createdItemId}`)
            .its('body')
            .should('have.property', 'id', createdItemId);
    });

    it('PUT to Update an item ➝ updates the item', () => {
        cy.request('PUT', `${baseURL}/items/${createdItemId}`, { name: 'Updated Item' })
            .its('body')
            .should('have.property', 'name', 'Updated Item');
    });

    it('DEL to Delete an item ➝ Deletes the item', () => {
        cy.request('DELETE', `${baseURL}/items/${createdItemId}`).its('status').should('eq', 204);
    });

    it('GET with the deleted item ID ➝ Returns 404 ➝ Verifying created item deleted', () => {
        cy.request({ url: `${baseURL}/items/${createdItemId}`, failOnStatusCode: false })
            .its('status')
            .should('eq', 404);
    });
});
