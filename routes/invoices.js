const express = require('express');
const router = express.Router();

const invoices = [
    { id: 1, clientId: 1, amount: 2500, status: 'Paid' },
    { id: 2, clientId: 2, amount: 12000, status: 'Pending' }
];

router.get('/', (req, res) => {
    res.json(invoices);
});

module.exports = router;

