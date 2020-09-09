const S = 'sʃɕzʒʑxɣ '.split('')
const T = 'ptkbdg'.split('')
const R = 'rlłmɱnŋjʋf'.split('')
const C = [...S, ...T, ...R]
const V = 'aæeiuoɪɐɔɛʊ'.split('')

const pattern = new RegExp(
  `((([${C.join('') + V.join('')}])(̟)?(ˑ|ː)?)([^${
    C.join('') + V.join('')
  }]+)?)`,
  'gu',
)

const syllablePattern = new RegExp()

const initial = [[S, T, R], [S, T], [T, R], [S, R], [S], [T], [R]]

const medial = []

const final = [[R, T, S], [T, S], [R, T], [R, S], [S], [T], [R]]

const merge = (syllable, final) => {
  return syllable
    .reduce((acc, cur) => {
      return [...acc, cur.map((e) => e[0] + (final ? e[1] : '')).join('')]
    }, [])
    .join('.')
    .replace(/(\.\s|\s\.)/gu, ' ')
}

const syllabise = (ipa) => {
  const phonemes = [...ipa.matchAll(pattern)].map((e) => [
    e[3],
    (e[4] || '') + (e[5] || '') + (e[6] || ''),
  ])
  let syllables = phonemes.reduce(
    (acc, cur) => {
      let last = acc.pop()
      last = [...last, cur]
      if (V.includes(cur[0])) {
        return [...acc, last, []]
      } else {
        return [...acc, last]
      }
    },
    [[]],
  )
  syllables = syllables.reduce((acc, cur) => {
    if (C.includes(cur[cur.length - 1][0])) {
      let last = acc.pop()
      return [...acc, [...last, ...cur]]
    }
    let allowed = { s: true, t: true, r: true }
    let possition = cur.length
    for (let i = cur.length - 2; i >= 0; i--) {
      let group = ''
      if (R.includes(cur[i][0])) {
        group = 'r'
      }
      if (T.includes(cur[i][0])) {
        group = 't'
      }
      if (S.includes(cur[i][0])) {
        group = 's'
      }
      if (group === 'r' && allowed.r) {
        allowed.r = false
      } else if (group === 't' && allowed.t) {
        allowed.r = false
        allowed.t = false
      } else if (group === 's' && allowed.s) {
        allowed.r = false
        allowed.t = false
        allowed.s = false
      } else {
        possition = i
        break
      }
    }
    if (possition !== cur.length) {
      let last = acc.pop()
      for (let i = 0; i <= possition; i++) {
        last = [...last, cur.shift()]
      }
      return [...acc, last, cur]
    } else {
      return [...acc, cur]
    }
  }, [])
  return merge(syllables, true)
    .replace(/(\.\s|\s\.)/gu, ' ')
    .replace('..', '.')
}

module.exports = syllabise
