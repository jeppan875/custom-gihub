const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add("repo", "/repo/:name/:path");
