const axios = require('axios').default
const querystring = require('querystring')
const transcribe = require('../functions/phonetic2')
const lemma = require('../functions/lemma')

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
  let lemmas = (await lemma(req.query.text)).reduce((a, b) => {
    let lem1 = b[0].split(' ').map((e) => [e, b[1]])
    a = [...a, ...lem1]
    return a
  }, [])

  let answer = req.query.text
    .split(' ')
    .map((word, index) => {
      if (word === lemmas[index][0] && lemmas[index].length === 2) {
        let match = lemmas[index][1].match(/[\s]sngr/)
        if (match !== null) {
          return word.replace(/si/, 'si.')
        }
      }
      return word
    })
    .join(' ')
  let request = await axios.post(
    'http://donelaitis.vdu.lt/main.php?id=4&nr=9_1',
    postData(answer),
    options,
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
        return transcribe(w[0], lemmas) + (w.length > 1 ? '(' + w[1] : '')
      }),
    ),
  )
}

module.exports = apiRoute
