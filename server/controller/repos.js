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

const getSingleRepo = async (req, res) => {
    const accessToken = req.session.accessToken
    const user = req.session.user.login
    const repo = req.query.repo
    superagent
        .get(`https://api.github.com/repos/${user}/${repo}/contents`)
        .set('Authorization', `token ${accessToken}`)
        .set('accept', 'application/json')
        .then(resul => {
            console.log(resul)
            res.send(resul)
        }).catch(err => {
            console.log(err)
        });
}

const getContent = async (req, res) => {
    const accessToken = req.session.accessToken
    const user = req.session.user.login
    const repo = req.query.repo
    const path = req.query.path
    superagent
        .get(`https://api.github.com/repos/${user}/${repo}/contents/${path}`)
        .set('Authorization', `token ${accessToken}`)
        .set('accept', 'application/json')
        .then(resul => {
            res.send(resul)
        }).catch(err => {
            console.log(err)
        });
}

module.exports = {
    repos,
    getSingleRepo,
    getContent
}
