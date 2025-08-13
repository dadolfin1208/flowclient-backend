const express = require('express');
const router = express.Router();

let invoices = [
<<<<<<< HEAD
  { id: 1, client: "John Doe", amount: 100, status: "unpaid" },
=======
  { id: 1, client: "Barry Hensley", amount: 100, status: "unpaid" },
>>>>>>> df8ef695167ac9b3f5d30a53c023979479e5ec99
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
