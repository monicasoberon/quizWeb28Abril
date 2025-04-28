const express = require('express');
const router = express.Router();

const StudentService = require('../services/studentService');
const AuthHandler = require('../handlers/auth');
const AuthController = require('../controllers/auth');

const studentService = new StudentService();
const authController = new AuthController(studentService);
const authHandler = new AuthHandler(authController);

router.post('/login', authHandler.login.bind(authHandler));

module.exports = router;