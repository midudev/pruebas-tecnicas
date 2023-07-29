/** @brief Returns an error indicating that there's a book with the given ISBN in the list with the given name. */
export function listHasBook (listName: string, isbn: string) {

  return new Error(`The list ${listName} already has a book with ISBN ${isbn}.`)
}

/** @brief Returns an error indicating that there's no book with the given ISBN in the list with the given name. */
export function listDoesNotHaveBook (listName: string, isbn: string) {

  return new Error(`The list ${listName} doesn't have a book with ISBN ${isbn}.`)
}

/** @brief Returns an error indicating that there's no list with the given name. */
export function nonExistentList (name: string) {

  return new Error(`A list with name ${name} doesn't exist.`)
}

/** @brief Returns an error indicating that there's a list with the given name. */
export function existentList (name: string) {

  return new Error(`A list with name ${name} already exists.`)
}

/** @brief Returns an error indicating a default list can't be deleted. */
export function canNotDeleteDefaultList () {

  return new Error("You can't delete a default list.")
}

/** @brief Returns an error indicating that there's a book with the given ISBN in the given list. */
export function alreadyPresentBook (list: string, isbn: string) {

  return new Error(`A book with ISBN ${isbn} already is in ${list}.`)
}

/** @brief Returns an error indicating that there's no book with the given ISBN in the given list. */
export function nonPresentBook (list: string, isbn: string) {

  return new Error(`A book with ISBN ${isbn} is not in list ${list}.`)
}
