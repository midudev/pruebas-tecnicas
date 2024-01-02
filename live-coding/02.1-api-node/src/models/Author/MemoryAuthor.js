export const authors = []

export class MemoryAuthor {
  static getAll () {
    return authors
  }

  static create (author) {
    const newAuthor = {
      id: authors.length + 1,
      ...author
    }

    authors.push(newAuthor)
    return newAuthor
  }
}
