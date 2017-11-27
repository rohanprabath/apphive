const applicationContext = process.env.mobile_engine_application_context || 'hiveface'
const applicationServerPort = process.env.mobile_engine_server_port || '5055'

const context = {
  applicationContext: applicationContext,
  serverPort: applicationServerPort
}

const routeOptions = {
  routes: {
    prefix: '/' + applicationContext
  }
}

const manifest = {
  connections: [
    {
      port: context.serverPort
    }
  ],
  registrations: [
    {
      plugin: {
        register: 'inert'
      }
    },
    {
      plugin: {
        register: 'vision'
      }
    },
    {
      plugin: {
        register: 'h2o2'
      }
    },
    {
      plugin: {
        register: 'hapi-swaggered',
        options: {
          info: {
            title: 'Mobile Engine API',
            description: 'API documentation for mobile engine API',
            version: '1.0',
          }
        }
      }
    },
    {
      plugin: {
        register: 'hapi-swaggered-ui',
        options: {
          title: 'Mobile Engine API',
          path: '/docs',
          swaggerOptions: {
            validatorUrl: null
          }
        }
      },
      options: routeOptions
    },
    {
      plugin: {
        register: './master'
      },
      options: routeOptions
    }
  ]
}

module.exports = {
  manifest: manifest,
  context: context
}