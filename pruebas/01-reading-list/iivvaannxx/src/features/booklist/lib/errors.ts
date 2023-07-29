import {

  MAX_CUSTOM_LISTS,

  MAX_CUSTOM_LIST_NAME_LENGTH,
  MIN_CUSTOM_LIST_NAME_LENGTH

} from './constants'

/** @brief Returns an error indicating that there's a book with the given ISBN in the list with the given name. */
export function listHasBook (listName: string, isbn: string) {

  return new Error(`La lista '${listName}' ya tiene un libro con ISBN ${isbn}.`)
}

/** @brief Returns an error indicating that there's no book with the given ISBN in the list with the given name. */
export function listDoesNotHaveBook (listName: string, isbn: string) {

  return new Error(`La lista '${listName}' no contiene ningún libro con ISBN ${isbn}.`)
}

/** @brief Returns an error indicating that there's no list with the given name. */
export function nonExistentList (name: string) {

  return new Error(`Ninguna lista con nombre '${name}' existe.`)
}

/** @brief Returns an error indicating that there's a list with the given name. */
export function existentList (name: string) {

  return new Error(`Una lista con nombre '${name}' ya existe.`)
}

/** @brief Returns an error indicating a default list can't be deleted. */
export function canNotDeleteDefaultList () {

  return new Error('No puedes eliminar una lista por defecti.')
}

export function noMoreCustomLists () {

  return new Error(`No puedes crear más de ${MAX_CUSTOM_LISTS} listas personalizadas.`)
}

/** @brief Returns an error indicating that the given name is not valid. */
export function invalidCustomName (name: string) {

  const baseError = `El nombre '${name}' no es válido`

  // Too short.
  if (name.length < MIN_CUSTOM_LIST_NAME_LENGTH) {

    return new Error(`${baseError}. Mínimo ${MIN_CUSTOM_LIST_NAME_LENGTH} letras.`)
  }

  // Too long.
  if (name.length > MAX_CUSTOM_LIST_NAME_LENGTH) {

    return new Error(`${baseError}. Máximo ${MAX_CUSTOM_LIST_NAME_LENGTH} letras.`)
  }

  return new Error(`${baseError}. Solo se permiten letras, números y guiones.`)
}
