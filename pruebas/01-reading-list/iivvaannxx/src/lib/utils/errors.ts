/** @brief Throws the given error if the given condition is true. */
export function throwIf (condition: boolean, error: Error) {

  if (condition) {

    throw error
  }
}

/** @brief Throws the given error if the given condition is false. */
export function throwIfNot (condition: boolean, error: Error) {

  throwIf(!(condition), error)
}
