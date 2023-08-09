const express = require('express');
const router= express.Router();
const authController= require('../controllers/user.controller')

// router.get('/', async (req, res) => {
//     res.send('User Route Here')
// })

router.post('/register', authController.register)
router.post('/login', authController.login)

module.exports =router;