const express = require('express'),
  bodyParser = require('body-parser'),
  app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/lead', (req, res) => {
  const request = require('request')

  const data = JSON.parse(req.query.data)
  const quizQuestions = {}
  data.forEach((q, i) => {
    quizQuestions[`data${i + 2}`] = q.answer
  })

const optinurl = process.env.NODE_ENV !== "production" ? 'https://financialmatch.com/' : req.query.optinurl

  request(
    {
      url: 'https://smb.leadbyte.com/restapi/v1.3/leads',
      method: 'POST',
      headers: {
        X_KEY: '859eda508946525b6b0822ee93037a91',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        campid: 'ERCHELPERSCOPY',
        sid: '3',
        firstname: req.query.firstname,
        lastname: req.query.lastname,
        email: req.query.email,
        phone1: req.query.phone,
        company: req.query.company,
        data1: req.query.data,
        data6: req.query.lead_source,
        data7: req.query.company,
        data8: req.query.utm_source,
        data9: req.query.utm_medium,
        data10: req.query.utm_campaign,
        c1: req.query.utm_source,
        c2: req.query.utm_medium,
        c3: req.query.utm_campaign,
        c4: req.query.c4,
        ssid: req.query.ssid,
        ef_aff: req.query.c3,
        source: req.query.source,
        ef_sub1: req.query.ef_sub1,
        ef_sub2: req.query.ef_sub2,
        ef_sub3: req.query.ef_sub3,
        ef_sub4: req.query.ef_sub4,
        ef_trans: req.query.c1,
        optinurl: optinurl,
        ...quizQuestions,
      }),
    },
    (error, result, body) => {
      if (error) {
        res.send({
          status: 'error',
          msg: error,
        })
      } else {
        const response = JSON.parse(body)
        if (response.status === 'Error') {
          res.send({
            status: 'error',
            msg: response.errors[0],
          })
        } else if (response.status === 'Success') {
          res.send({
            status: 'success',
            msg: 'We will contact you shortly!',
          })
        } else {
          res.send({
            status: 'error',
            msg: 'Something went wrong try again later!',
          })
        }
      }
    }
  )
})

module.exports = {
  path: '/api',
  handler: app,
}
