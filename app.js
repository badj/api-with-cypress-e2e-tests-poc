const express = require('express');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const app = express();
const port = 3333;

// Middleware for JSON parsing
app.use(bodyParser.json());

// In-memory data store for simplicity
let items = [];
let id = 1;

// Swagger setup
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Item API',
            version: '1.0.0',
            description: 'A simple CRUD API with Swagger docs',
        },
        servers: [{ url: `http://localhost:${port}` }],
    },
    apis: ['./app.js'], // Points to this file for Swagger annotations
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * components:
 *   schemas:
 *     Item:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the item
 *         name:
 *           type: string
 *           description: Name of the item
 *       required:
 *         - name
 */

/**
 * @swagger
 * /items:
 *   get:
 *     summary: Get all items
 *     responses:
 *       200:
 *         description: List of items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Item'
 */
app.get('/items', (req, res) => {
    res.json(items);
});

/**
 * @swagger
 * /items/{id}:
 *   get:
 *     summary: Get an item by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the item to get
 *     responses:
 *       200:
 *         description: Item found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       404:
 *         description: Item not found
 */
app.get('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    res.json(item);
});

/**
 * @swagger
 * /items:
 *   post:
 *     summary: Create a new item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Item created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 */
app.post('/items', (req, res) => {
    const item = { id: id++, name: req.body.name };
    items.push(item);
    res.status(201).json(item);
});

/**
 * @swagger
 * /items/{id}:
 *   put:
 *     summary: Update an item by id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Numeric ID of the item to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Item updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Item'
 *       404:
 *         description: Item not found
 */
app.put('/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).send('Item not found');
    item.name = req.body.name || item.name;
    res.json(item);
});

/**
 * @swagger
 * /items/{id}:
 *   delete:
 *     summary: Delete an item by id
 *     parameters:
 *       - in: path
 *         name: id
 *         description: Numeric ID of the item to delete
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Item deleted
 *       404:
 *         description: Item not found
 */
app.delete('/items/:id', (req, res) => {
    const index = items.findIndex(i => i.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).send('Item not found');
    items.splice(index, 1);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
});
