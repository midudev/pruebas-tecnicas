import Toastify from 'toastify-js'

// deno-lint-ignore no-explicit-any
let currentToast: any

/** @brief Closes the currently displayed toast. */
export function closeCurrentToast () {

  currentToast?.hideToast()
}

/** @brief Shows an error toast with the given message for the given duration. */
export function error (message: string, duration: number) {

  closeCurrentToast()
  currentToast = Toastify({

    text: message,
    duration,
    position: 'center',

    offset: { x: 0, y: 20 },
    style: { background: 'rgb(229, 62, 62)' }

  })

  currentToast.showToast()
}

/** @brief Shows a successful toast with the given message for the given duration. */
export function success (message: string, duration: number) {

  closeCurrentToast()
  currentToast = Toastify({

    text: message,
    duration,
    position: 'center',

    offset: { x: 0, y: 20 },
    style: { background: 'rgb(75, 181, 67)' }

  }).showToast()
}
