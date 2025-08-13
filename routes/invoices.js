const express = require('express');
const router = express.Router();

// Clean list of invoices
let invoices = [
  { id: 1, client: "Barry Hensley", amount: 100, status: "unpaid" },
  { id: 2, client: "Jane Smith", amount: 150, status: "paid" }
];

// Get all invoices
router.get('/', (req, res) => res.json(invoices));

// Add a new invoice
router.post('/add', (req, res) => {
  const { client, amount } = req.body;
  const newInvoice = { id: invoices.length + 1, client, amount, status: "unpaid" };
  invoices.push(newInvoice);
  res.json(newInvoice);
});

module.exports = router;

