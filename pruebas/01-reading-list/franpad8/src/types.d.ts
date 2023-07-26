export interface Book {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  id: string
}

export interface IMDBBook {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: Author
}

export enum Genre {
  ALL = 'Todas',
  SCIFI = 'Ciencia ficción',
  FANTASY = 'Fantasía',
  TERROR = 'Terror',
  ZOMBIES = 'Zombies'
}
