const express = require('express');
const router = express.Router();

let invoices = [];

// GET all invoices
router.get('/', (req, res) => {
  res.json(invoices);
});

// POST /invoices/add
router.post('/add', (req, res) => {
  const { client, amount } = req.body;
  if (!client || !amount) return res.status(400).json({ error: 'Client and amount required' });

  const newInvoice = { id: invoices.length + 1, client, amount, status: 'unpaid' };
  invoices.push(newInvoice);
  res.json(newInvoice);
});

module.exports = router;
