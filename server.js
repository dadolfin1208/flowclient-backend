const express = require('express');
const app = express();
const port = 8080;

// Import routes
const clientsRoute = require('./routes/clients');
const contractsRoute = require('./routes/contracts');
const invoicesRoute = require('./routes/invoices');
const aiRoute = require('./routes/ai');

// Middleware to parse JSON
app.use(express.json());

// Serve static files from public folder
app.use(express.static('public'));

// Mount routes
app.use('/clients', clientsRoute);
app.use('/contracts', contractsRoute);
app.use('/invoices', invoicesRoute);
app.use('/ai', aiRoute);

// Start server
app.listen(port, () => {
    console.log(`FlowClient backend running on port ${port}`);
});
