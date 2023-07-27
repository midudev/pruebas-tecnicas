/**
 *
 * @param {Object} object
 * @param {String} param
 * @returns Boolean
 */
export const deepSearch = (object, param) => {
  for (const prop in object) {
    if (typeof object[prop] === 'string' && object[prop].toLowerCase().includes(param.toLowerCase())) {
      return true
    }
    if (typeof object[prop] === 'object') {
      if (deepSearch(object[prop], param)) {
        return true
      }
    }
  }
  return false
}
