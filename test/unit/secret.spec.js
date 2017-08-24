'use strict';

var sinon = require('sinon'),
    chai = require('chai'),
    expect = chai.expect,
    q = require('q');

var controller = require('../../api/secret/secret.controller');
var model = require('../../api/secret/secret.model');

describe('Secret controller', function () {
    var personId = '58f539bbf62bf527e0880b0a';
    var person = {
        "_id": personId,
        "name": "João Paulo da Silva",
        "email": "contato@joaopaulo.eti.br",
        "friend": "Paiva",
    };

    beforeEach(function () {
        sinon.stub(model, 'find');
        sinon.stub(model, 'create');
        sinon.stub(model, 'remove');
    });

    afterEach(function () {
        model.find.restore();
        model.create.restore();
        model.remove.restore();
    });

    describe('List all People', function () {
        it('should return an array', function () {
            model.find.returns(q.resolve([person]));
            controller.get({})
                .then(function (res) {
                    expect(model.find.calledOnce).to.be.true;
                    expect(model.find.calledWith()).to.be.true;
                    expect(res.data).to.deep.equal([person]);
                    expect(res.statusCode).to.be.equal(200);
                });
        });

        it('should test the error behavior', function () {
            model.find.returns(q.reject('err'));
            controller.get({})
                .then(function (res) {
                    expect(model.find.calledOnce).to.be.true;
                    expect(model.find.calledWith()).to.be.true;
                    expect(res.data).to.be.equal('err');
                    expect(res.statusCode).to.be.equal(422);
                });
        });
    });

    describe('Get a single person', function () {
        it('should return an object', function () {
            model.find.returns(q.resolve(person));
            controller.get({ _id: personId })
                .then(function (res) {
                    expect(model.find.calledOnce).to.be.true;
                    expect(model.find.calledWith()).to.be.true;
                    expect(res.data).to.deep.equal(person);
                    expect(res.statusCode).to.be.equal(200);
                });
        });

        it('should test the error behavior', function () {
            model.find.returns(q.reject('err'));
            controller.get({ _id: personId })
                .then(function (res) {
                    expect(model.find.calledOnce).to.be.true;
                    expect(model.find.calledWith()).to.be.true;
                    expect(res.data).to.be.equal('err');
                    expect(res.statusCode).to.be.equal(422);
                });
        });
    });

    describe('Insert a new person', function () {
        it('should insert successfully and return the object', function () {
            model.create.returns(q.resolve(person));
            controller.insert(person)
                .then(function (response) {
                    expect(model.create.calledOnce).to.be.true;
                    expect(model.create.calledWith(person)).to.be.true;
                    expect(response.data).to.deep.equal(person);
                    expect(response.statusCode).to.be.equal(200);
                });
        });

        it('should test the error behavior', function (done) {
            model.create.returns(q.reject('err'));
            controller.insert(person)
                .then(function (response) {
                    expect(model.create.calledOnce).to.be.true;
                    expect(model.create.calledWith(person)).to.be.true;
                    expect(response.data).to.be.equal('err');
                    expect(response.statusCode).to.be.equal(422);
                    done();
                });
        });
    });

});