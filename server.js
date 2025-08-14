const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Middleware to parse JSON bodies
app.use(express.json());

// Import routes
const clientsRouter = require('./routes/clients');
const invoicesRouter = require('./routes/invoices');

// Root route just to verify the server is running
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
