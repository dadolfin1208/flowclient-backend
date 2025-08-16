const express = require('express');
const router = express.Router();

// Initial clients array
let clients = [];

// GET all clients
router.get('/', (req, res) => {
  res.json(clients);
});

// POST /clients/add - expects JSON in request body
router.post('/add', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ error: 'Name and email required' });

  // Avoid duplicate clients
  const exists = clients.some(c => c.email === email);
  if (exists) return res.status(409).json({ error: 'Client already exists' });

  const newClient = { id: clients.length + 1, name, email };
  clients.push(newClient);
  res.json(newClient);
});

module.exports = router;
