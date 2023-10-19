import { $, $child } from '../utils'

export function returnBookToOriginalPosition({ transitions = false } = {}) {
  const $selectedBook = $('[data-selected="true"]')
  const $coverBookIMG = $child($selectedBook, 'img')

  if (!transitions) {
    $coverBookIMG?.classList.add('disableTransitions')
    setTimeout(() => {
      $coverBookIMG?.classList.remove('disableTransitions')
    }, 100)
  }

  // If there is a selected book, then removing
  // to the target position and disable transition
  // when it back
  $coverBookIMG?.removeAttribute('style')
  delete $selectedBook?.dataset.selected
}

export function takeBookToTargetElement({ $bookElementToTake, $elementTarget }) {
  const {
    offsetLeft: targetLeft,
    offsetTop: targetTop,
    offsetWidth: targetWidth
  } = $elementTarget
  const {
    offsetLeft,
    offsetTop,
    offsetWidth
  } = $bookElementToTake

  const calculations = {
    left: targetLeft - offsetLeft,
    top: -(offsetTop - targetTop),
    scale: targetWidth / offsetWidth
  }
  $bookElementToTake.style.left = `${calculations.left}px`
  $bookElementToTake.style.top = `${calculations.top}px`
  $bookElementToTake.style.scale = calculations.scale
}
