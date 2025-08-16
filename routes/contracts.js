
const express = require('express');
const router = express.Router();

const contracts = [
    { id: 1, clientId: 1, title: 'Website Redesign', amount: 5000 },
    { id: 2, clientId: 2, title: 'App Development', amount: 12000 }
];

router.get('/', (req, res) => {
    res.json(contracts);
});

module.exports = router;
