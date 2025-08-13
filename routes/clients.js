const express = require('express');
const router = express.Router();

let clients = [
  { id: 1, name: "Barry Hensley", email: "bhensley1968@gmail.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" }
];

router.get('/', (req, res) => res.json(clients));

router.post('/add', (req, res) => {
  const { name, email } = req.body;
  const newClient = { id: clients.length + 1, name, email };
  clients.push(newClient);
  res.json(newClient);
});

module.exports = router;
