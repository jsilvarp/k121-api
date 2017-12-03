'use strict'

import mongoose from 'mongoose'
import Secret from './secret.model'
import Q from 'q'
import _ from 'lodash'
import draw from '../../lib/draw'
import sendMail from '../../lib/sendMail'

const responseMessage = (data, statusCode) => (
  {
    data: data,
    statusCode: statusCode
  }
)

exports.get = async selector => {
  try {
    const person = await Secret.findOne(selector)
    return responseMessage(person, 200)
  } catch (err) {
    return responseMessage(err, 422)
  }
}

exports.getAll = async () => {
  try {
    const people = await Secret.find()
    return responseMessage(people, 200)
  } catch (err) {
    return responseMessage(err, 422)
  }
}

exports.delete = async selector => {
  try {
    const person = await Secret.remove(selector)
    return responseMessage(person, 200)
  } catch (err) {
		return responseMessage(err, 422);
  }
}

exports.insert = async data => {
  try {
	  const person = await Secret.create(data)
    return responseMessage(person, 201)
  } catch (err) {
    return responseMessage(err, 422)
  }
}

exports.update = async (id, data) => {
  try {
    const person = await Secret.update({ _id: id }, data)
    return responseMessage(person, 200)
  } catch (err) {
		return responseMessage(err, 422);
  }
}

exports.draw = async () => {
  try {
    const everybody = await Secret.find()
    const newDraw = draw(everybody)
    await updatePeople(newDraw)
    sendMail(newDraw)
    return responseMessage(newDraw, 200)
  } catch (err) {
    return responseMessage(err, 422);
  }
}

const updatePeople = async people => {
  const promises = _.map(people, async person => {
    return await Secret.update({ _id: person._id }, person)
  })
  return Q.all(promises)
}
