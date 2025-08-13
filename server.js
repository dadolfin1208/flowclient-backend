const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/clients', require('./routes/clients'));
app.use('/invoices', require('./routes/invoices'));
app.use('/ai', require('./routes/ai'));
app.use('/contracts', require('./routes/contracts'));

app.listen(PORT, () => {
  console.log(`FlowClient backend running on port ${PORT}`);
});
