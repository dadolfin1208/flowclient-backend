const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Import routes
const clientsRouter = require('./routes/clients');
const invoicesRouter = require('./routes/invoices');

// Root route
app.get('/', (req, res) => {
  res.send('FlowClient backend is running!');
});

// Use routes
app.use('/clients', clientsRouter);
app.use('/invoices', invoicesRouter);

// Start server
app.listen(PORT, () => {
  console.log(`FlowClient backend running on port ${PORT}`);
});

