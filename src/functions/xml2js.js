function xml2js(text) {
  let regex = /<word="(.+)" type="(.+)"\/>/gu
  let matches = text
    .split('\n')
    .map((e) => {
      let t = [...e.matchAll(regex)][0]
      if (t === undefined) {
        return null
      }
      if (t.length > 2) {
        return [t[1], t[2]]
      } else if (t.length > 1) {
        return [t[1]]
      } else {
        return null
      }
    })
    .filter((e) => e !== null)
  return matches
}

module.exports = xml2js
