const express = require('express')
const router = express.Router()
const userController = require('../controller/user')

router.get('/logout', userController.navigateToRegister)

router.get('/login/redirect', userController.navigateToLogin)