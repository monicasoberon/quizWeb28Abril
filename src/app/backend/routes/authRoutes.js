const express = require('express');
const router = express.Router();

const StudentService = require('../services/studentService');
const AuthHandler = require('../handlers/authHandlers');
const AuthController = require('../controllers/authController');

const studentService = new StudentService();
const authController = new AuthController(studentService);
const authHandler = new AuthHandler(authController);

router.post('/login', authHandler.login.bind(authHandler));

module.exports = router;