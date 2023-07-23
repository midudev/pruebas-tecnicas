import { atom } from 'nanostores'

/** @brief Whether the modal dialog is opened or not. */
export const isOpen = atom(true)

/** @brief The title of the modal dialog. */
export const title = atom('No Title')

/** @brief Sets a new title for the modal dialog. */
export const setModalTitle = (newTitle: string) => {

  title.set(newTitle)
}

/** @brief Opens the modal dialog. */
export function open () {

  isOpen.set(true)
}

/** @brief Closes the modal dialog. */
export function close () {

  isOpen.set(false)
}
