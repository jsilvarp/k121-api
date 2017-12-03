'use strict'

import 'babel-polyfill'

import sinon from 'sinon'
import chai from 'chai'
import q from 'q'
import controller from '../../api/secret/secret.controller'
import model from '../../api/secret/secret.model'

const expect =chai.expect

describe('Secret controller', () => {
  const personId = '58f539bbf62bf527e0880b0a'
  const person = {
    "_id": personId,
    "name": "João Paulo da Silva",
    "email": "contato@joaopaulo.eti.br",
    "friend": "Paiva",
  }

  beforeEach(() => {
    sinon.stub(model, 'find')
    sinon.stub(model, 'create')
    sinon.stub(model, 'remove')
    sinon.stub(model, 'findOne')
    sinon.stub(model, 'update')
  })

  afterEach(() => {
    model.find.restore()
    model.create.restore()
    model.remove.restore()
    model.findOne.restore()
    model.update.restore()
  })

  describe('List all People', () => {
    it('should return an array', async () => {
      model.find.returns(q.resolve([person]))
      const res = await controller.getAll()
      expect(model.find.calledOnce).to.be.true
      expect(model.find.calledWith()).to.be.true
      expect(res.data).to.deep.equal([person])
      expect(res.statusCode).to.be.equal(200)
    })

    it('should test the error behavior', async () => {
      model.find.returns(q.reject('err'))
      const res = await controller.getAll()
      expect(model.find.calledOnce).to.be.true
      expect(model.find.calledWith()).to.be.true
      expect(res.data).to.be.equal('err')
      expect(res.statusCode).to.be.equal(422)
    })
  })

  describe('Get a single person', () => {
    it('should return an object', async () => {
      model.findOne.returns(q.resolve(person))
      const res = await controller.get({ _id: personId })
      expect(model.findOne.calledOnce).to.be.true
      expect(model.findOne.calledWith()).to.be.true
      expect(res.data).to.deep.equal(person)
      expect(res.statusCode).to.be.equal(200)
    })

    it('should test the error behavior', async () => {
      model.findOne.returns(q.reject('err'))
      const res = await controller.get({ _id: personId })
      expect(model.findOne.calledOnce).to.be.true
      expect(model.findOne.calledWith()).to.be.true
      expect(res.data).to.be.equal('err')
      expect(res.statusCode).to.be.equal(422)
    })
  })

  describe('Insert a new person', () => {
    it('should insert successfully and return the object', async () => {
      model.create.returns(q.resolve(person))
      const response = await controller.insert(person)
      expect(model.create.calledOnce).to.be.true
      expect(model.create.calledWith(person)).to.be.true
      expect(response.data).to.deep.equal(person)
      expect(response.statusCode).to.be.equal(201)
    })

    it('should test the error behavior', async () => {
      model.create.returns(q.reject('err'))
      const response = await controller.insert(person)
      expect(model.create.calledOnce).to.be.true
      expect(model.create.calledWith(person)).to.be.true
      expect(response.data).to.be.equal('err')
      expect(response.statusCode).to.be.equal(422)
    })
  })

  describe('Update a existing person', () => {
    it('should update successfully and return the object', async () => {
      model.update.returns(q.resolve(person))
      const response = await controller.update(personId, person)
      expect(model.update.calledOnce).to.be.true
      expect(response.data).to.deep.equal(person)
      expect(response.statusCode).to.be.equal(200)
    })

    it('should test the error behavior', async () => {
      model.update.returns(q.reject('err'))
      const response = await controller.update(personId, person)
      expect(model.update.calledOnce).to.be.true
      expect(response.data).to.be.equal('err')
      expect(response.statusCode).to.be.equal(422)
    })
  })

  describe('Delete a existing person', () => {
    it('should delete successfully', async () => {
      model.remove.returns(q.resolve())
      const response = await controller.delete(personId)
      expect(model.remove.calledOnce).to.be.true
      expect(model.remove.calledWith(personId)).to.be.true
      expect(response.statusCode).to.be.equal(200)
    })

    it('should test the error behavior', async () => {
      model.remove.returns(q.reject('err'))
      const response = await controller.delete(personId)
      expect(model.remove.calledOnce).to.be.true
      expect(model.remove.calledWith(personId)).to.be.true
      expect(response.data).to.be.equal('err')
      expect(response.statusCode).to.be.equal(422)
    })
  })

})
