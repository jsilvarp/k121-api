'use strict'

var _ = require('lodash');

module.exports = function(people) {

    var randomPeople = _.shuffle(people);
    people = _.map(randomPeople, function (p, i) {
        var next = i+1;
        if (next == people.length) {
            p.friend = randomPeople[0].name;
            return p;
        }
        p.friend = randomPeople[i+1].name;
        return p;
    });

    return _.sortBy(people, ['_id']);

}
