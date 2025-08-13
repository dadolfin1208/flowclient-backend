const express = require('express');
const router = express.Router();

let invoices = [
  { id: 1, client: "John Doe", amount: 100, status: "unpaid" },
  { id: 2, client: "Jane Smith", amount: 150, status: "paid" }
];

router.get('/', (req, res) => res.json(invoices));

router.post('/add', (req, res) => {
  const { client, amount } = req.body;
  const newInvoice = { id: invoices.length + 1, client, amount, status: "unpaid" };
  invoices.push(newInvoice);
  res.json(newInvoice);
});

module.exports = router;
