

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'AI endpoint placeholder' });
});

module.exports = router;
