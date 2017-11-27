const glue = require('glue')
const serverConfig = require('./config')
const path = require('path')

const options = {
  relativeTo: path.join(__dirname, '/private/modules')
}

glue.compose(serverConfig.manifest, options, function (err, server) {
  if (err) {
    throw err
  }

  server.route({
    method: 'GET',
    path: '/' + serverConfig.context.applicationContext + '/{param*}',
    handler: {
      directory: {
        path: 'server/public',
        listing: false,
        index: true
      }
    }
  })

  // Start the server
  server.start((err) => {
    if (err) {
      throw err
    }
    console.log('Server running at:', server.info.uri)
  })
})
