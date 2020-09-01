const pairs = [
  [
    ['nk', 'ng'],
    ['ŋk', 'ŋg'],
  ],
  [
    ['ch', 'h'],
    ['x', 'ɣ'],
  ],
  [
    ['c', 'dz'],
    ['t͡s', 'd͡z'],
  ],
  [
    ['č', 'dž'],
    ['t͡ʃ', 'd͡ʒ'],
  ],
  [
    ['š', 'ž'],
    ['ʃ', 'ʒ'],
  ],
  [
    ['p', 'b'],
    ['p', 'b'],
  ],
  [
    ['t', 'd'],
    ['t', 'd'],
  ],
  [
    ['s̃', 'z̃'],
    ['s', 'z'],
  ],
  [
    ['s', 'z'],
    ['s', 'z'],
  ],
  [
    ['k', 'g'],
    ['k', 'g'],
  ],
]

let vowels = [
  [/ia&#x0301;i|e&#x0301;i/gu, 'æˑɪ'],
  [/ja&#x0300;i|jai&#x0303|jai/gu, 'jɛɪˑ'],
  [/ja&#x0300;u|jai&#x0303|jau/gu, 'jɛʊˑ'],
  [/ja&#x0301;i/gu, 'jæˑɪ'],
  [/ja&#x0301;u/gu, 'jæˑʊ'],
  [/ja&#x0300;|ja/gu, 'jɛ'],
  [/ja&#x0301;|ja&#x0303;/gu, 'jæː'],
  [/ia&#x0303;i|iai|ei&#x0303;|ei/gu, 'ɛɪˑ'],
  [/iau&#x0303;|iau|eu&#x0303;|eu/gu, 'ɛʊˑ'],
  [/ia&#x0301;u/gu, 'æˑʊˑ'],
  [/ia&#x0301;u/gu, 'æˑʊˑ'],
  [/io&#x0303;|io&#x0301;|io/gu, 'ʲo'],
  [/i&#x0301;e|ie&#x0303;|ie/gu, 'iə'],
  [/iu&#x0301;o|iuo&#x0303;|iuo/gu, 'ʲuə'],
  [/u&#x0301;o|uo&#x0303;|uo/gu, 'uə'],
  [/ią&#x0301;|ią&#x0303;|ią|ia&#x0301;|ia&#x0303;/gu, 'æː'],
  [/ia&#x0301;u/gu, 'æˑʊ'],
  [/au&#x0303;|au/gu, 'ɐʊˑ'],
  [/a&#x0301;u/gu, 'aˑʊ'],
  [/ai&#x0303;|ai/gu, 'ɐɪˑ'],
  [/a&#x0301;i/gu, 'aˑɪ'],
  [/iu&#x0303;|iu&#x0300;|iu/gu, 'ʲʊ'],
  [/u&#x0303;|u&#x0300;|u/gu, 'ʊ'],
  [/iū&#x0303;|iū&#x0301;|ių&#x0303;|ių&#x0301;|ių|iū/gu, 'ʲuː'],
  [/io&#x0300;/gu, 'ʲɔ'],
  [/ia&#x0300;|ia/gu, 'ɛ'],
  [/y&#x0301;|y&#x0303;|į&#x0301;|į&#x0303;|į|y/gu, 'iː'],
  [/i&#x0303;|i&#x0300;|i/gu, 'ɪ'],
  [/e&#x0301;|e&#x0303;|ę&#x0303;|ę&#x0301;|ę/gu, 'æː'],
  [/ė&#x0301;|ė&#x0303;|ė/gu, 'eː'],
  [/e&#x0300;|e/g, 'ɛ'],
  [/ą&#x0301;|ą&#x0303;|a&#x0301;|a&#x0303;|ą/gu, 'aː'],
  [/a&#x0300;|a/gu, 'ɐ'],
  [/o&#x0300;/gu, 'ɔ'],
  [/o&#x0301;|o&#x0303;|o/gu, 'oː'],
  [/ū&#x0303;|ū&#x0301;|ų&#x0303;|ų&#x0301;|ų|ū/gu, 'uː'],
  [/ɪː/gu, 'iː'],
  [/ɛː/gu, 'eː'],
  [/ɐː/gu, 'aː'],
  [/ɐˑ/gu, 'aˑ'],
  [/&#x0303;/gu, ''],
  [/žs|šs|ss|zs/gu, 's'],
  [/žš|šš|sš|zš/gu, 'š'],
  [/žz|šz|sz|zz/gu, 'z'],
  [/žž|šž|sž|zž/gu, 'ž'],
  [/sč|zč/gu, 'šč'],
  [/sdž|zdž/gu, 'ždž'],
  [/v/gu, 'ʋ'],
]

const front = 'ieæɪɛ'.split('')
const consonants = 'mbpfvntdszʃʒrlrskgxɣʋ'.split('')

/**
 *
 * @param {string} text
 */
function transcribe(text) {
  let answer = text
  vowels.forEach((e) => {
    let pattern = new RegExp(e[0], 'gu')
    answer = answer.replace(pattern, e[1])
  })
  pairs.forEach((e) => {
    for (let i = 0; i < 2; i++) {
      let pattern = new RegExp(e[0][i], 'gu')
      answer = answer.replace(pattern, e[1][i])
    }
  })
  let temp = answer
  answer = answer.split('')

  for (let i = answer.length - 2; i >= 0; i--) {
    let voiced = ['tpsfkx'.split(''), 'dbzvgɣ'.split('')]
    if (i === answer.length - 1 || answer[i + 1] === ' ') {
      let index = voiced[1].indexOf(answer[i])
      if (index !== -1) {
        answer[i] = voiced[0][index]
      }
    }
  }

  for (let i = answer.length - 2; i >= 0; i--) {
    if (consonants.includes(answer[i + 1]) && consonants.includes(answer[i])) {
      try {
        let prevId = pairs
          .filter(
            (b) =>
              b.filter((a) => a.filter((e) => e === answer[i + 1]).length > 0)
                .length > 0,
          )[0][1]
          .indexOf(answer[i + 1])
        let curId = answer[i]
        try {
          curId = pairs.filter(
            (b) =>
              b.filter((a) => a.filter((e) => e === answer[i]).length > 0)
                .length > 0,
          )[0][1]
          curId = curId[prevId]
        } catch (e) {}
        answer[i] = curId
      } catch (e) {}
    }
  }

  for (let i = temp.length - 2; i >= 0; i--) {
    let ttt = answer[i + 1].split('')
    if (
      (answer[i + 1] === 'd' &&
        answer[i + 2] === '͡' &&
        answer[i + 3] === 'ʒʲ' &&
        consonants.includes(temp[i])) ||
      (answer[i + 1] === 't' &&
        answer[i + 2] === '͡' &&
        answer[i + 3] === 'ʃʲ' &&
        consonants.includes(temp[i])) ||
      (front.includes(temp[i + 1]) && consonants.includes(temp[i])) ||
      (consonants.includes(temp[i]) && ttt.includes('ʲ')) ||
      (answer[i + 1] === 'ʲ' &&
        consonants.includes(temp[i] && answer[i] !== 'j'))
    ) {
      answer[i] += 'ʲ'
    } else if (temp[i] === 'l' && temp[i + 1] !== 'ʲ' && !ttt.includes('ʲ')) {
      answer[i] = 'ɫ'
    } else if (temp[i] === 'l') {
      answer[i] += 'ʲ'
    }
  }
  answer = answer.join('').replace(/ʲʲ/gu, 'ʲ')
  return answer
}

module.exports = transcribe
