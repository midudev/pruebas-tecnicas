function clearHTMl (domElement) {
  while (domElement.firstChild) {
    domElement.removeChild(domElement.firstChild)
  }
}

function removeDuplicatesGenders (arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}

const SECTION_TITLE_ACTION = {
  DEFAULT: 'book-section__title',
  ACTIVE: 'book-section__title--active'
}

export {
  clearHTMl,
  removeDuplicatesGenders,
  SECTION_TITLE_ACTION
}
