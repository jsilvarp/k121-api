import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import config from 'config'
import util from 'util'
import Q from 'q'
import secretRoute from './api/secret'
import './api/secret/secret.model'

const Server = express()
const port = process.env.PORT || 3000

const {
  dbUser,
  dbPass,
  host,
  dbName,
  ssl,
  replicaSetName,
  authSource
} = config.get('database')

const connString = `mongodb://${dbUser}:${dbPass}@${host}/${dbName}?ssl=${ssl}&replicaSet=${replicaSetName}&authSource=${authSource}`;

mongoose.connect(connString)
mongoose.Promise = Q.Promise

Server.use(bodyParser.json())
Server.use(cors())

Server.use('/api/secret', secretRoute)

Server.use((req, res) => {
	res.status(404).send({url: req.originalUrl + ' not found'})
})

Server.listen(port)

console.log('REST Api inicializada na porta ' + port)

export default Server
