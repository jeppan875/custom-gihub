const express = require('express')
const router = express.Router()
const { login, logout } = require('../controller/user')

router.get('/logout', logout)

router.get('/login/redirect', login)

module.exports = router