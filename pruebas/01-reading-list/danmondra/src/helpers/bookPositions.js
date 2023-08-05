import { $ } from '../utils'

export function returnBookToOriginalPosition({ transitions = false } = {}) {
  const $selectedBook = $('[data-selected="true"]')
  if (!transitions) {
    $selectedBook?.classList.add('disableTransitions')
    setTimeout(() => {
      $selectedBook?.classList.remove('disableTransitions')
    }, 100)
  }

  // If there is a selected book, then removing
  // to the target position and disable transition
  // when it back
  $selectedBook?.removeAttribute('style')
  delete $selectedBook?.dataset.selected
}

export function takeBookToTargetElement({ $bookToTake, $elementTarget }) {
  const {
    offsetLeft: targetLeft,
    offsetTop: targetTop,
    offsetWidth: targetWidth
  } = $elementTarget
  const {
    offsetLeft,
    offsetTop,
    offsetWidth
  } = $bookToTake

  const calculations = {
    left: targetLeft - offsetLeft,
    top: -(offsetTop - targetTop),
    scale: targetWidth / offsetWidth
  }
  $bookToTake.style.left = `${calculations.left}px`
  $bookToTake.style.top = `${calculations.top}px`
  $bookToTake.style.scale = calculations.scale
}
