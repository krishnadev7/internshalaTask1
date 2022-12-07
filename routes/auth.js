const express = require('express');
const {Login,Register, ForgotPassword, ResetPassword} = require('../controllers/auth');
const router = express.Router();

// Get method API's
router.post('/login', Login)
router.post('/register', Register)

// forgot password Api
router.post('/forgotPassword',ForgotPassword)

// reset password Api
router.get('/reset-password/:id/token', ResetPassword);
router.post('/reset-password/:id/token');




module.exports = router;