const express = require('express')
const next = require('next')
const superagent = require('superagent')
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
  saveUninitialized: false, // Don't save a created but not modified session.
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // 1 day
  }
}

app
  .prepare()
  .then(() => {
    const server = express()

    server.use(session(sessionOptions))

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { id: req.params.id }
      app.render(req, res, actualPage, queryParams)
    })
    server.get('/repos', (req, res) => {
      const accessToken = req.session.accessToken
      const user = req.session.user.login
      superagent
        .get(`https://api.github.com/users/${user}/repos`)
        .set('Authorization', `token ${accessToken}`)
        .set('accept', 'application/json')
        .then(resul => {
          console.log(resul.body)
          res.send(resul)
        }).catch(err => {
          console.log(err)
        });
    })
    server.get('/loginredirect', async (req, res) => {
      const clientID = process.env.GITHUB_CLIENTID
      const clientSecret = process.env.GITHUB_CLIEN_SECRET
      const { query: { code } } = req

      if (!code) {
        return res.send({
          success: false,
          message: 'no code'
        })
      }

      superagent
        .post('https://github.com/login/oauth/access_token')
        .send({ client_id: clientID, client_secret: clientSecret, code })
        .set('accept', 'application/json')
        .end((err, result) => {
          if (err) {
            console.log(err)
          }
          const accessToken = result.body.access_token
          req.session.accessToken = accessToken
          superagent
            .get('https://api.github.com/user')
            .set('Authorization', `token ${accessToken}`)
            .then(resul => {
              const { login, avatar_url } = resul.body
              const user = { login, avatar_url }
              req.session.user = user
              res.redirect('/')
            }).catch(err => {
              console.log(err)
            });
        })
    })
    server.get('/logout', (req, res) => {
      req.session.user = null
      res.redirect('/')
    })

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
