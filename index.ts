import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * @openapi
 * /wassup:
 *   get:
 *     description: Say wassup
 *     responses:
 *       200:
 *         description: Returns a wassup message
 */
app.get('/wassup', (req, res) => {
  res.json({ message: 'wasssssssup' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My TypeScript API',
      version: '1.0.0',
    },
  },
  apis: ['./index.ts'], // or wherever your endpoints are
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/openapi.json', (_req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});