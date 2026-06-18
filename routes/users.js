const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.get('/profile', async (req, res) => {
  res.json({ message: 'User profile' });
});

module.exports = router;