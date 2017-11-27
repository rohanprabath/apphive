const invoke = (request, reply) => {
  let welcome = {
    api: {
      version: '1.0.0',
      backwardCompatibility: [],
      text: 'Welcome to Hiveface'
    }
  }

  reply(welcome)
}

module.exports = {
  invoke: invoke
}
