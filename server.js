const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()
const session = require('express-session')
require('dotenv').config()
const SESSION_SECRET = "keyboard cat"
const SESSION_NAME = "name of keyboard cat"

const sessionOptions = {
  name: SESSION_NAME, // Don't use default session cookie name.
  secret: SESSION_SECRET, // Change it!!! The secret is used to hash the session with HMAC.
  resave: false, // Resave even if a request is not changing the session.
  saveUninitialized: true, // Don't save a created but not modified session.
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  }
}

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(session(sessionOptions))

    const repos = require('./server/routes/repos')
    server.use('/repos', repos)

    const user = require('./server/routes/user')
    server.use('/user', user)

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3003, err => {
      if (err) throw err
      console.log('> Ready on http://localhost:3003')
    })
  })
  .catch(ex => {
    console.error(ex.stack)
    process.exit(1)
  })
