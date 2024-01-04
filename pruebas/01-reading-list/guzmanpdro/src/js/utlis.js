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

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`
    const node = element

    node.classList.add(`${prefix}animated`, animationName)

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd (event) {
      event.stopPropagation()
      node.classList.remove(`${prefix}animated`, animationName)
      resolve('Animation ended')
    }

    node.addEventListener('animationend', handleAnimationEnd, { once: true })
  })

export {
  clearHTMl,
  removeDuplicatesGenders,
  SECTION_TITLE_ACTION,
  animateCSS
}
