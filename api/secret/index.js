'use strict'

import express from 'express'
import SecretController from './secret.controller'

const router = express.Router()

const response = (res, message) => {
  res.status(message.statusCode)
  res.json(message.data)
}

/**
 * @api {get} /api/secret Get all people
 * @apiVersion 1.0.0
 * @apiGroup Secret
 *
 * @apiSuccess {Object[]} secret People array
 * @apiSuccess {String} secret._id Person ID
 * @apiSuccess {String} secret.name Person name
 * @apiSuccess {Number} secret.email Person email
 * @apiSuccess {Number} secret.friend Person's secret friend
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    [{
 *      "_id": "58e6ef7537ddf7e67c37f7e5",
 *      "name": "João Paulo",
 *      "email": "contato@joaopaulo.eti.br",
 *      "friend": "Paiva"
 *    }]
 *
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get('/', async (req, res) => {
  const message = await SecretController.getAll()
  response(res, message)
})

/**
 * @api {get} /api/secret/draw Draw people
 * @apiVersion 1.0.0
 * @apiGroup Secret
 *
 * @apiSuccess {Object[]} secret People array
 * @apiSuccess {String} secret._id Person ID
 * @apiSuccess {String} secret.name Person name
 * @apiSuccess {Number} secret.email Person email
 * @apiSuccess {Number} secret.friend Person's secret friend
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    [{
 *      "_id": "58e6ef7537ddf7e67c37f7e5",
 *      "name": "João Paulo",
 *      "email": "contato@joaopaulo.eti.br",
 *      "friend": "Paiva"
 *    }]
 *
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */

router.get('/draw', async (req, res) => {
  const message = await SecretController.draw()
  response(res, message)
})

/**
 * @api {get} /api/secret/:id Get specific person
 * @apiVersion 1.0.0
 * @apiGroup Secret
 *
 * @apiParam {String} id Person's ID
 *
 * @apiSuccess {Object} secret Person
 * @apiSuccess {String} secret._id Person ID
 * @apiSuccess {String} secret.name Person name
 * @apiSuccess {Number} secret.email Person email
 * @apiSuccess {Number} secret.friend Person's secret friend
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "_id": "58e6ef7537ddf7e67c37f7e5",
 *      "name": "João Paulo",
 *      "email": "contato@joaopaulo.eti.br",
 *      "friend": "Paiva"
 *    }
 *
 * @apiErrorExample {json} List error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get('/:id', async (req, res) => {
  const message = await SecretController.get({ _id: req.params.id })
  response(res, message)
})

/**
 * @api {post} /api/secret Insert a new person
 * @apiVersion 1.0.0
 * @apiGroup Secret
 *
 * @apiParamExample {json} Input
 *    {
 *      "name": "João Paulo",
 *      "email": "contato@joaopaulo.eti.br",
 *      "friend": "Paiva"
 *    }
 *
 * @apiSuccess {Object} secret Person
 * @apiSuccess {String} secret._id Person ID
 * @apiSuccess {String} secret.name Person name
 * @apiSuccess {Number} secret.email Person email
 * @apiSuccess {Number} secret.friend Person's secret friend
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "_id": "58e6ef7537ddf7e67c37f7e5",
 *      "name": "João Paulo",
 *      "email": "contato@joaopaulo.eti.br",
 *      "friend": "Paiva"
 *    }
 *
 * @apiErrorExample {json} Register error
 *    HTTP/1.1 500 Internal Server Error
 */
router.post('/', async (req, res) => {
  const message = await SecretController.insert(req.body)
  response(res, message)
})

/**
 * @api {delete} /api/secret/:id Delete a person
 * @apiVersion 1.0.0
 * @apiGroup Secret
 *
 * @apiParam {String} id Person's ID
 *
 * @apiSuccessExample {json} Success-Response
 *    HTTP/1.1 200 OK
 *
 * @apiErrorExample {json} Delete error
 *    HTTP/1.1 500 Internal Server Error
 */
router.delete('/:id', async (req, res) => {
  const message = await SecretController.delete({ _id: req.params.id })
  response(res, message)
})

/**
 * @api {put} /api/secret/:id Update a person
 * @apiVersion 1.0.0
 * @apiGroup Secret
 *
 * @apiParam {String} id Person's ID
 *
 * @apiParamExample {json} Input
 *    {
 *      "name": "João Paulo",
 *      "email": "contato@joaopaulo.eti.br",
 *      "friend": "Paiva"
 *    }
 *
 * @apiSuccessExample {json} Success-Response
 *    HTTP/1.1 200 OK
 *
 * @apiErrorExample {json} Update error
 *    HTTP/1.1 500 Internal Server Error
 */
router.put('/:id', async (req, res) => {
  const message = await SecretController.update(req.params.id, req.body)
  response(res, message)
})


export default router
