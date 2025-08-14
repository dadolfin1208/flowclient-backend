const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware to parse JSON and URL-encoded bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routers
const clientsRouter = require('./routes/clients');
const invoicesRouter = require('./routes/invoices');

// Mount routers
app.use('/clients', clientsRouter);
app.use('/invoices', invoicesRouter);

// Root route
app.get('/', (req, res) => {
  res.send('FlowClient backend running!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`FlowClient backend running on port ${PORT}`);
});

