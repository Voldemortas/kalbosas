const S = [...'sczščž'.split(''), 'dž', 'dz']
const T = ['ptkbdg']
const R = ['rlmnvj']

const pattern = /(s|z|š|ž|c|dz|č|dž|){0,1}[ptkbdg]{0,1}[rlmnjv]{0,1}i?[ąęėįųūeyuioa]{1,3}(#x0300;|#x0301;|#x0303;)?[ąęėįųūeyuioa]?/giu

function syllabise(word) {
  let result = [...'mesčiau'.matchAll(pattern)]
    .map((e) => '.' + e[0])
    .join('')
    .replace('..', '.')
    .replace(/^./, '')
  console.log(result)
  return result
}

module.exports = syllabise
