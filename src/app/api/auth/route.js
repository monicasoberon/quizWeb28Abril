const express = require('express');
const router = express.Router();
const authRoutes = require('../../backend/routes/authRoutes');

router.use('/auth', authRoutes);

module.exports = router;