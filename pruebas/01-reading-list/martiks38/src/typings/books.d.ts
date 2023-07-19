// Defino los tipos para pasar del mook a una API de libros.

type Author = {
  name: string
  otherBooks: string[]
}

export type Book = {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: Author
}
