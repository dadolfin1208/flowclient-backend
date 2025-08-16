const express = require('express');
const router = express.Router();

let contracts = [];

// GET all contracts
router.get('/', (req, res) => {
  res.json(contracts);
});

// POST /contracts/add
router.post('/add', (req, res) => {
  const { client, details } = req.body;
  if (!client || !details) return res.status(400).json({ error: 'Client and details required' });

  const newContract = { id: contracts.length + 1, client, details };
  contracts.push(newContract);
  res.json(newContract);
});

module.exports = router;
