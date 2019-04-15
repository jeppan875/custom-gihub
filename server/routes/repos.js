const express = require('express')
const router = express.Router()
const { repos, getSingleRepo } = require('../controller/repos')

router.get('/repos', repos)
router.get('/single', getSingleRepo)

module.exports = router
