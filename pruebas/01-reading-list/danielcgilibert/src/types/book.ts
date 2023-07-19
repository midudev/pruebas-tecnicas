import { IAuthor } from './author'

export interface IBook {
  title: string
  pages: number
  genre: string
  cover: string
  synopsis: string
  year: number
  ISBN: string
  author: IAuthor
}
