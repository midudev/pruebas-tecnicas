import type { Book, Filter } from "~/types"

export function getSortingFunction(filter: Filter) {
  const filterFunction = (a: Book, b: Book) => {
    const valueA = a[filter]
    const valueB = b[filter]

    const valuesAreStrings =
      typeof valueA === "string" && typeof valueB === "string"

    if (valuesAreStrings) {
      return stringsFilter(valueA, valueB)
    }

    const valuesAreNumbers =
      typeof valueA === "number" && typeof valueB === "number"

    if (valuesAreNumbers) {
      return numbersFilter(valueA, valueB)
    }

    return numbersFilter(Number(valueA), Number(valueB)) // default filter
  }

  return filterFunction
}

const numbersFilter = (a: number, b: number) => {
  if (a < b) return 1
  if (a > b) return -1

  return 0
}

const stringsFilter = (a: string, b: string) => {
  return a.localeCompare(b)
}
