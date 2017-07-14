const express = require('express');
const router = express.Router();

// Register 
router.get('/register', (req, res, next) => {
    res.send('Register');
});

// Auth 
router.get('/auth', (req, res, next) => {
    res.send('AUTH');
});

// Profile 
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

// Profile 
router.get('/profile', (req, res, next) => {
    res.send('PROFILE');
});

//Validate 
router.get('/validate', (req, res, next) => {
    res.send('VALIDATE');
});

module.exports = router;