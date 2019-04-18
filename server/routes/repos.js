const express = require('express')
const router = express.Router()
const { repos, getSingleRepo, getContent } = require('../controller/repos')

router.get('/repos', repos)
router.get('/single', getSingleRepo)
router.get('/content', getContent)

module.exports = router
