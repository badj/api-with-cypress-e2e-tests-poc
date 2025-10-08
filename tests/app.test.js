const request = require('supertest');
const { app, reset } = require('../app');

describe('API Unit Tests', () => {
    beforeEach(() => {
        // Reset in-memory data before each test
        reset();
    });

    it('should create an item', async () => {
        const res = await request(app)
            .post('/items')
            .send({ name: 'Item1' });
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty('name', 'Item1');
        expect(res.body).toHaveProperty('id', 1);
    });

    it('should list items', async () => {
        await request(app).post('/items').send({ name: 'Item1' });
        const res = await request(app).get('/items');
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBe(1);
    });

    it('should get item by id', async () => {
        await request(app).post('/items').send({ name: 'ItemA' });
        const res = await request(app).get('/items/1');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('id', 1);
        expect(res.body.name).toBe('ItemA');
    });

    it('should update item', async () => {
        await request(app).post('/items').send({ name: 'Item1' });
        const res = await request(app)
            .put('/items/1')
            .send({ name: 'UpdatedItem' });
        expect(res.statusCode).toBe(200);
        expect(res.body.name).toBe('UpdatedItem');
    });

    it('should delete item', async () => {
        await request(app).post('/items').send({ name: 'ToDelete' });
        const res = await request(app).delete('/items/1');
        expect(res.statusCode).toBe(204);
        // Try to get deleted item
        const res2 = await request(app).get('/items/1');
        expect(res2.statusCode).toBe(404);
    });

    it('should return 404 for missing item', async () => {
        const res = await request(app).get('/items/42');
        expect(res.statusCode).toBe(404);
    });
});
