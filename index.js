require('express-async-errors')

const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const logHTTP = require('tiny-log-http')
const Backend = require('like-backend')

module.exports = function (opts = {}) {
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

  app.use(logHTTP({ userAgent: !Backend.testing, ...opts.logs }))

  return app
}
