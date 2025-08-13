const express = require('express');
const router = express.Router();

router.post('/generate-reminder', (req, res) => {
  const { client } = req.body;
  res.json({ message: `Reminder for ${client}: Don't forget to pay your invoice!` });
});

module.exports = router;
