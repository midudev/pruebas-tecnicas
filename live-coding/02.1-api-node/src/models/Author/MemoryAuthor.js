const authors = []

export class MemoryAuthor {
  static getAll () {
    return authors
  }

  static create (author) {
    authors.push(author)
    return author
  }
}
