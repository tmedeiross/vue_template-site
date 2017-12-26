String.prototype.ucwords = function () {
  let str = this.toLowerCase()
  return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
  function (s) {
    return s.toUpperCase()
  })
}
