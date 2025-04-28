const express = require('express');
const router = express.Router();

const StudentService = require('../services/StudentService');
const AuthHandler = require('../handlers/AuthHandlers');
const AuthController = require('../controllers/AuthController');

const studentService = new StudentService();
const authController = new AuthController(studentService);
const authHandler = new AuthHandler(authController);

router.post('/login', authHandler.login.bind(authHandler));

module.exports = router;