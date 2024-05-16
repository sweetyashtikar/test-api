const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');

// GET user by ID
router.get('/:id', async (req, res) => {
  const userId = req.params.id;

  // Validate ObjectId format
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ error: 'Invalid user ID' });
  }

  try {
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
