'use strict';

import sendmail from 'sendmail'
import _ from 'lodash'

const SendMail = sendmail()

module.exports = people => {
  _.forEach(people, person => {
    const options = {
      from: 'no-reply@k121.com',
      to: person.email,
      subject: 'Amigo Secreto - K121',
      text: `
        Olá ${person.name}!

        Seu amigo secreto é ${person.friend}!

        Não se esqueça que é segredo, portanto, não conte pra ninguém ;)

        Até mais!
      `
    }

    SendMail(options, (err, reply) => {
      console.log(err && err.stack);
    })
  })
}
