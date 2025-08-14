const express = require('express');
const router = express.Router();

// Clean list of clients
let clients = [
  { id: 1, name: "Barry Hensley", email: "bhensley1968@gmail.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

// Get all clients
router.get('/', (req, res) => res.json(clients));

// Add a new client
router.post('/add', (req, res) => {
  const { name, email } = req.body;
  const newClient = { id: clients.length + 1, name, email };
  clients.push(newClient);
  res.json(newClient);
});

// Temporary GET route to add a client via browser for testing
router.get('/add', (req, res) => {
  const { name, email } = req.query;   // Get ?name=...&email=... from the URL
  if (!name || !email) return res.send('Please provide ?name= and &email=');

  const newClient = { id: clients.length + 1, name, email };
  clients.push(newClient);
  res.send(`Client added: ${JSON.stringify(newClient)}`);
});


module.exports = router;

