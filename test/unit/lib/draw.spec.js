'use strict';

var sinon = require('sinon'),
    chai = require('chai'),
    expect = chai.expect,
    _ = require('lodash');

var draw = require('../../../lib/draw');

describe('Draw librart', function () {
    var people = [
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
    ];

    describe('Test draw function', function () {
        var result = draw(people);

        it('should return shuffled array', function () {
            expect(result).to.not.be.equal(people);
        });

        it('should not have yourself as friend', function () {
            _.forEach(result, function (p) {
                expect(p.friend).to.not.be.equal(p.name);
            });
        });

        it('should the last person have the first one as friend', function () {
            var last = result.length-1;
            expect(result[last].friend).to.be.equal(result[0].name)
        });
    });

});