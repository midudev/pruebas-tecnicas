import kebabCase from 'just-kebab-case'
import { CUSTOM_LIST_DEFAULT_NAME } from './constants'

/** @brief Gets the key name for a list with the given name. */
export function getListKey (name: string) {

  return kebabCase(name.trim())
}

/** @brief Creates a name for a custom list with the given index. */
export function customListName (index: number) {

  return `${CUSTOM_LIST_DEFAULT_NAME}${index}`
}
