const routes = require('./routes')

exports.register = (server, options, next) => {
  server.route(routes)
  return next()
}

exports.register.attributes = {
  name: 'master',
  version: '1.0.0'
}
