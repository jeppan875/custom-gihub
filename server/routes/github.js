const express = require('express')
const router = express.Router()
const issueController = require('./controller/issues')
const webhookCheck = require('./utils/webhookSecretCheck')

router.post('/login/callback', (req, res) => {
    console.log(req)
})

module.exports = router
