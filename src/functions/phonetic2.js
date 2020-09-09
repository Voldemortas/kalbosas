const pairs = [
  [
    ['nk', 'ng'],
    ['ŋk', 'ŋg'],
  ],
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
  [/([ae])&#x0301;([nlrm])/gu, '$1ˑ$2'],
  [/ia&#x0301;i|e&#x0301;i/gu, 'æˑɪ̯'],
  [/ja&#x0300;i|jai&#x0303|jai/gu, 'jɛɪ̯ˑ'],
  [/ja&#x0300;u|jai&#x0303|jau/gu, 'jɛʊ̯ˑ'],
  [/ja&#x0301;i/gu, 'jæˑɪ̯'],
  [/ja&#x0301;u/gu, 'jæˑʊ̯'],
  [/ja&#x0300;|ja/gu, 'jɛ'],
  [/ja&#x0301;|ja&#x0303;/gu, 'jæː'],
  [/ia&#x0303;i|iai|ei&#x0303;|ei/gu, 'ɛɪ̯ˑ'],
  [/iau&#x0303;|iau|eu&#x0303;|eu/gu, 'ɛʊ̯ˑ'],
  [/ia&#x0301;u/gu, 'æˑʊ̯'],
  [/io&#x0303;|io&#x0301;|io/gu, 'ʲʷo̟'],
  [/i&#x0301;e|ie&#x0303;|ie/gu, 'iə̯'],
  [/iu&#x0301;o|iuo&#x0303;|iuo/gu, 'ʲʷu̟ə̯'],
  [/u&#x0301;o|uo&#x0303;|uo/gu, 'ʷuə̯'],
  [/ią&#x0301;|ią&#x0303;|ią|ia&#x0301;|ia&#x0303;/gu, 'æː'],
  [/ia&#x0301;u/gu, 'æˑʊ̯'],
  [/au&#x0303;|au/gu, 'ɐʊ̯ˑ'],
  [/a&#x0301;u/gu, 'aˑʊ̯'],
  [/ai&#x0303;|ai/gu, 'ɐɪ̯ˑ'],
  [/a&#x0301;i/gu, 'aˑɪ̯'],
  [/iu&#x0303;|iu&#x0300;|iu/gu, 'ʲʷʊ̟'],
  [/u&#x0303;|u&#x0300;|u/gu, 'ʷʊ'],
  [/iū&#x0303;|iū&#x0301;|ių&#x0303;|ių&#x0301;|ių|iū/gu, 'ʲʷu̟ː'],
  [/io&#x0300;/gu, 'ʲʷɔ̟'],
  [/ia&#x0300;|ia/gu, 'ɛ'],
  [/y&#x0301;|y&#x0303;|į&#x0301;|į&#x0303;|į|y/gu, 'iː'],
  [/i&#x0303;|i&#x0300;|i/gu, 'ɪ'],
  [/e&#x0301;|e&#x0303;|ę&#x0303;|ę&#x0301;|ę/gu, 'æː'],
  [/ė&#x0301;|ė&#x0303;|ė/gu, 'eː'],
  [/e&#x0300;|e/g, 'ɛ'],
  [/ą&#x0301;|ą&#x0303;|a&#x0301;|a&#x0303;|ą/gu, 'aː'],
  [/a&#x0300;|a/gu, 'ɐ'],
  [/o&#x0300;/gu, 'ʷɔ'],
  [/o&#x0301;|o&#x0303;|o/gu, 'ʷoː'],
  [/ū&#x0303;|ū&#x0301;|ų&#x0303;|ų&#x0301;|ų|ū/gu, 'ʷuː'],
  [/ʊɪ/gu, 'ʊɪ̯ˑ'],
  [/ʊ̟ɪ/gu, 'ʊ̟ɪ̯ˑ'],
  [/ɛɪ/gu, 'ɛɪ̯ˑ'],
  [/ɐɪ/gu, 'ɐɪ̯ˑ'],
  [/ɪː/gu, 'iː'],
  [/ɛː/gu, 'eː'],
  [/ɐː/gu, 'aː'],
  [/ɐˑ/gu, 'aˑ'],
  [/&#x0303;/gu, 'ˑ'],
  [/žs|šs|ss|zs/gu, 's'],
  [/žš|šš|sš|zš/gu, 'š'],
  [/žz|šz|sz|zz/gu, 'z'],
  [/žž|šž|sž|zž/gu, 'ž'],
  [/sč|zč/gu, 'šč'],
  [/sdž|zdž/gu, 'ždž'],
  [/v/gu, 'ʋ'],
]

let diacritics = [
  [/jʷ([ouʊɔ])/gu, 'jʷ$1̟'],
  [/([tk])(\s|$)/gu, '$1ʰ$2'],
  [/(p)(\s|$)/gu, '$1(ʰ)$2'],
  [/(ɫ)/gu, '$1̪'],
  [/(([td])([^r]|$|\s))/gu, '$2̪$3'],
  [/(ʃʲ)/gu, 'ɕ'],
  [/(ʒʲ)/gu, 'ʑ'],
  [/([ʃʒ])([^ʷ])/gu, '$1̜$2'],
  [/nˑ([kg])ʲ/gu, 'ŋ˖ˑ$1ʲ'],
  [/([ʃʒ])/gu, '$1˖'],
  [/([kgŋɣx])ʲ/gu, '$1˖'],
  [/m(ʲ?)([ʋf])/gu, '$1ɱ$2'],
  [/([pbtd]̪?)(ʲ?)([lɫ])/gu, '$1$2ˡ$3'],
  [/([pbtd]̪?)(ʲ?)([mɱ])/gu, '$1$2ᵐ$3'],
  [/([td]̪?)(ʲ?)([nŋ])/gu, '$1$2ⁿ$3'],
  [/(^|\s)ʷ/gu, ''],
  [/̯ˑ̯ˑ/gu, '̯ˑ'],
  [/([nlsz])/gu, '$1̪'],
  [/r/gu, 'r̺'],
  //[/([pbkgtd])([˖ʲ])([pbkgtd])/gu, '$1$2̚$3'],//no audible release
]

const front = 'ieæɪɛ'.split('')
const back = 'uoʊɔ'.split('')
const consonants = 'mbpfvntdszʃʒrlrskgxɣʋŋɫ'.split('')

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

  answer = answer.join('').replace(/ʲʲ/gu, 'ʲ').replace(/ʷʷ/gu, 'ʷ').split('')
  temp = answer

  for (let i = temp.length - 2; i >= 0; i--) {
    let ttt = answer[i + 1].split('')
    if (
      ((answer[i + 2] === 'ʷ' && i !== temp.length - 3) ||
        (answer[i + 2] === 'ʲ' &&
          answer[i + 3] === 'ʷ' &&
          i !== temp.length - 4)) &&
      consonants.includes(answer[i])
    ) {
      answer[i] += 'ʷ'
    }
  }

  answer = answer
    .join('')
    .replace(/ʲʲ/gu, 'ʲ')
    .replace(/ʷʷ/gu, 'ʷ')
    .replace(/ʷʲʷ/gu, 'ʲʷ')

  diacritics.forEach((diacritic) => {
    answer = answer.replace(diacritic[0], diacritic[1])
  })
  return answer
}

module.exports = transcribe
