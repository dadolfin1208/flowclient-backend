const express = require('express');
const router = express.Router();

let clients = [
 HEAD
  { id: 1, name: "Barry Hensley", email: "bhensley1968@gmail.com" },
    df8ef695167ac9b3f5d30a53c023979479e5ec99
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
