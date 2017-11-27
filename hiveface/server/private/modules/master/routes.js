'use strict'

const welcomeApiLogic = require('./logic_welcome_api')

module.exports = [
  {
    method: 'GET',
    path: '/api/master/welcome',
    handler: welcomeApiLogic.invoke,
    config: {
      tags: ['api'],
      description: 'Welcome API',
      notes: 'Welcome message and version compatibility information'
    }
  }
]
