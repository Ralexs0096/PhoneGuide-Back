const express = require('express')
const cors = require('cors')
const dbConnection = require('./db/config')
const { PORT } = process.env

class Server {
  constructor() {
    this.app = express()
    this.port = PORT || 4000
    this.PbxCatalog = '/api/pbx'

    // Start DB connection
    this.getConnect()
    // Setup Middlewares
    this.middlewares()
    // Setup router
    this.router()
  }

  async getConnect() {
    await dbConnection()
  }

  middlewares() {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(express.static('public'))
    this.app.use(cors())
  }

  router() {
    this.app.use(this.PbxCatalog, require('./routes/PbxCatalog.route'))
  }

  listen() {
    this.app.listen(this.port, console.log('Server Running on Port', this.port))
  }
}

module.exports = Server
