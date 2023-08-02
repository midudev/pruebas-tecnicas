export const $ = (selector) => {
  try {
    return document.querySelector(selector)
  } catch (e) {
    return null
  }
}

export const moveClassToAnotherElement = (className, $targetElement, selector = '') => {
  const $selectedElement = $(`${selector} .${className}`)

  $selectedElement?.classList.remove(className)
  $targetElement.classList.add(className)
}
