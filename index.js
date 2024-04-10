require('express-async-errors')

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const logHTTP = require('tiny-log-http')

exports = module.exports = function (opts = {}) {
  const app = express()

  app.set('trust proxy', true)
  app.set('json spaces', 2)

  app.disable('x-powered-by')
  app.disable('etag')

  if (opts.cors) app.use(cors(opts.cors))

  app.use(express.text())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))

  app.use(cookieParser())

  app.use(logHTTP({ userAgent: !opts.testing, ...opts.logs }))

  return app
}

exports.application = express.application
exports.Router = express.Router
exports.Route = express.Route
exports.static = express.static
exports.request = express.request
exports.response = express.response
exports.query = express.query
