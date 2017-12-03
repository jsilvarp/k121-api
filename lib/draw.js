'use strict'

import _ from 'lodash'

module.exports = people => {

  const randomPeople = _.shuffle(people)
  const newDraw = _.map(randomPeople, (p, i) => {
    const next = i+1
    if (next == people.length) {
      p.friend = randomPeople[0].name
      return p
    }
    p.friend = randomPeople[i+1].name
    return p
  })

  return _.sortBy(newDraw, ['_id'])
}
