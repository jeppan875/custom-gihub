const superagent = require('superagent')

const logout = async (req, res) => {
    req.session.user = null
    res.redirect('/')
}

const login = async (req, res) => {
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
}

module.exports = {
    login,
    logout
}