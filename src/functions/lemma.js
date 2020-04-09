const axios = require('axios').default
const querystring = require('querystring')
const xml2js = require('./xml2js')

async function lemma(text) {
  const postData = (text) =>
    querystring.stringify({
      tekstas: text,
      tipas: 'anotuoti',
      pateikti: 'M',
    })

  const options = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }
  let request = await axios.post(
    'http://donelaitis.vdu.lt/NLP/nlp.php',
    postData(text),
    options
  )
  let data = await request.data
  return xml2js(data)
}

module.exports = lemma
