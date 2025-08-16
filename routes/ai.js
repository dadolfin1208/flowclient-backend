const express = require('express');
const router = express.Router();

router.post('/reminder', (req, res) => {
  const { client } = req.body;
  if (!client) return res.status(400).json({ error: 'Client required' });
  res.json({ message: `Reminder for ${client}: Don't forget to pay your invoice!` });
});

module.exports = router;

