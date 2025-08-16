const express = require('express');
const router = express.Router();

// Initial clients array
let clients = [
  { id: 1, name: "Barry Hensley", email: "barry@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

// Helper function to add a new client safely
function addClientSafe(name, email) {
  // Check if client already exists by name or email
  const exists = clients.some(c => c.name === name || c.email === email);
  if (exists) return null; // skip duplicate
  const newClient = { id: clients.length + 1, name, email };
  clients.push(newClient);
  return newClient;
}

// GET all clients
router.get('/', (req, res) => {
  res.json(clients);
});

// POST /clients/add - expects JSON in request body
router.post('/add', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: "Name and email are required" });
  }
  const newClient = addClientSafe(name, email);
  if (!newClient) {
    return res.status(409).json({ error: "Client already exists" });
  }
  res.json(newClient);
});

// Optional GET for adding clients via URL query for testing
// Example: /clients/add?name=John&email=john@example.com
router.get('/add', (req, res) => {
  const { name, email } = req.query;
  if (!name || !email) {
    return res.status(400).send("Name and email are required");
  }
  const newClient = addClientSafe(name, email);
  if (!newClient) {
    return res.status(409).send("Client already exists");
  }
  res.json(newClient);
});

module.exports = router;



