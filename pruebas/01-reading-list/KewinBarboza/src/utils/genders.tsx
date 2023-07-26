import type { Library } from "~/interfaces"

export const genders = (library: Library[]) => {
  const genders = library.map(book => (book.book.genre))
  return [... new Set([...genders])].concat('Todos').reverse()
}
