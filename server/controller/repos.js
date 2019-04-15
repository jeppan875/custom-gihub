const superagent = require('superagent')

const repos = async (req, res) => {
    const accessToken = req.session.accessToken
    const user = req.session.user.login
    superagent
        .get(`https://api.github.com/users/${user}/repos?sort=updated`)
        .set('Authorization', `token ${accessToken}`)
        .set('accept', 'application/json')
        .then(resul => {
            res.send(resul)
        }).catch(err => {
            console.log(err)
        });
}

module.exports = {
    repos
}
