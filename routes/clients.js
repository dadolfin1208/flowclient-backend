
const express = require('express');
const router = express.Router();

const clients = [
    { id: 1, name: 'Acme Corp', email: 'contact@acme.com' },
    { id: 2, name: 'Globex Inc', email: 'info@globex.com' }
];

router.get('/', (req, res) => {
    res.json(clients);
});

module.exports = router;
