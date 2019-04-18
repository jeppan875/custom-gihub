const express = require('express')
const router = express.Router()
const { repos, getContent } = require('../controller/repos')

router.get('/repos', repos)
router.get('/content', getContent)

module.exports = router
