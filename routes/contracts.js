const express = require('express');
const router = express.Router();

router.post('/send-contract', (req, res) => {
  const { client } = req.body;
  res.json({ message: `Contract sent to ${client} (dummy response)` });
});

module.exports = router;
