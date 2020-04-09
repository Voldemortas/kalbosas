const axios = require('axios').default
const querystring = require('querystring')
const transcribe = require('../functions/phonetic')

const postData = (text) =>
  querystring.stringify({
    tekstas: text,
  })

const options = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
}

async function apiRoute(req, res) {
  let request = await axios.post(
    'http://donelaitis.vdu.lt/main.php?id=4&nr=9_1',
    postData(req.query.text),
    options
  )
  let data = await request.data
  let q = data.split('READONLY>')[1].split('</')[0].split('\n')
  q.shift()
  if (q[q.length - 1] === '') {
    q.pop()
  }

  res.set('Content-Type', 'application/json')
  res.send(
    JSON.stringify(
      q.map((e) => {
        w = e.split('(')
        return transcribe(w[0]) + (w.length > 1 ? '(' + w[1] : '')
      })
    )
  )
}

module.exports = apiRoute
