'use strict'

import 'babel-polyfill'

import sinon from 'sinon'
import chai from 'chai'
import _ from 'lodash'
import draw from '../../../lib/draw'

const expect = chai.expect

describe('Draw librart', () => {
  const people = [
    {
      "name": "A",
      "email": "a@joaopaulo.eti.br",
      "friend": ""
    },
    {
      "name": "B",
      "email": "b@joaopaulo.eti.br",
      "friend": ""
    },
    {
      "name": "C",
      "email": "c@joaopaulo.eti.br",
      "friend": ""
    },
    {
      "name": "D",
      "email": "d@joaopaulo.eti.br",
      "friend": ""
    },
    {
      "name": "E",
      "email": "e@joaopaulo.eti.br",
      "friend": ""
    }
  ]

  describe('Test draw function', () => {
    const result = draw(people)

    it('should return shuffled array', () => {
      expect(result).to.not.be.equal(people)
    })

    it('should not have yourself as friend', () => {
      _.forEach(result, function (p) {
          expect(p.friend).to.not.be.equal(p.name)
      })
    })

    it('should the last person have the first one as friend', () => {
      var last = result.length-1
      expect(result[last].friend).to.be.equal(result[0].name)
    })
  })

})
