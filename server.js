const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Routers
const clientsRouter = require('./routes/clients');
const contractsRouter = require('./routes/contracts');
const invoicesRouter = require('./routes/invoices');
const aiRouter = require('./routes/ai');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// API routes
app.use('/clients', clientsRouter);
app.use('/contracts', contractsRouter);
app.use('/invoices', invoicesRouter);
app.use('/ai', aiRouter);

// Root test
app.get('/', (req, res) => {
  res.send('FlowClient backend is running!');
});

app.listen(PORT, () => {
  console.log(`FlowClient backend running on port ${PORT}`);
});
