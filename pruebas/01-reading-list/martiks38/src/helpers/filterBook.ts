import { allGenre } from '@/assets/constants'

export function filterBook({
  genre,
  maxNumberPages,
  currentGenre,
  pages,
  title,
  word
}: {
  currentGenre: string
  genre: string
  maxNumberPages: number
  pages: number
  title?: string
  word?: string
}) {
  const inRange = pages <= maxNumberPages
  const equalGenre = currentGenre === allGenre ? true : currentGenre === genre

  if (word === undefined || title === undefined) return inRange && equalGenre

  const regex = new RegExp(word, 'i')

  return regex.test(title) && inRange && equalGenre
}
