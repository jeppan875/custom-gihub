const express = require('express')
const router = express.Router()
const { repos } = require('../controller/repos')

router.get('/repos', repos)

module.exports = router
