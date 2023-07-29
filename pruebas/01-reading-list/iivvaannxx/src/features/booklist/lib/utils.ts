import kebabCase from 'just-kebab-case'
import {

  MIN_CUSTOM_LIST_NAME_LENGTH,
  MAX_CUSTOM_LIST_NAME_LENGTH,

  CUSTOM_LIST_DEFAULT_NAME

} from './constants'

/** @brief Gets the key name for a list with the given name. */
export function getListKey (name: string) {

  return kebabCase(name.trim())
}

/** @brief Creates a name for a custom list with the given index. */
export function customListName (index: number) {

  return `${CUSTOM_LIST_DEFAULT_NAME}${index}`
}

/** @brief Checks if the given name is valid for a custom list. */
export function isValidCustomName (name: string) {

  const regex = /^[\w\s.-ñáéíóúÁÉÍÓÚ]+$/

  return regex.test(name) &&
    name.length > MIN_CUSTOM_LIST_NAME_LENGTH &&
    name.length <= MAX_CUSTOM_LIST_NAME_LENGTH
}
