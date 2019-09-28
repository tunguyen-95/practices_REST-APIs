const config = require('./config.json')

const environment = process.env.NODE_ENV || 'development'

module.exports = config[environment]
