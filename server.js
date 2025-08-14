const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('FlowClient backend is running!');
});

// Other routes
app.use('/clients', require('./routes/clients'));
app.use('/invoices', require('./routes/invoices'));
app.use('/ai', require('./routes/ai'));
app.use('/contracts', require('./routes/contracts'));

app.listen(PORT, () => {
  console.log(`FlowClient backend running on port ${PORT}`);
});

