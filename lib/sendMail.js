'use strict';

var sendmail = require('sendmail')(),
    _ = require('lodash');

module.exports = function (people) {
    _.forEach(people, function (person) {

        var options = {};
        options.from = 'no-reply@k121.com';
        options.to = person.email;
        options.subject = 'Amigo Secreto - K121'
        options.text = `
            Olá ${person.name}!

            Seu amigo secreto é ${person.friend}! 

            Não se esqueça que é segredo, portanto, não conte pra ninguém ;)

            Até mais!
        `;

        sendmail(options, function(err, reply) {
            console.log(err && err.stack);
        });
    })
}