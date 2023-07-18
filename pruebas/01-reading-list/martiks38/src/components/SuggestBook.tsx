'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useLibrary } from '@/hooks/useLibrary'

import suggestBookStyles from '@/assets/styles/Home.module.css'
import { nameStorage } from '@/assets/constants'

import type { Book } from '@/typings/books'

export function SuggestBook() {
  const [suggestion, setSuggestion] = useState<Book | null>(null)
  const [books, genres] = useLibrary()

  useEffect(() => {
    const topGenreStr = window.localStorage.getItem(nameStorage.topGenre)

    if (!topGenreStr) {
      const random = Math.floor(Math.random() * books.length)
      setSuggestion(books[random])
    } else {
      const listOfReadingStr = window.localStorage.getItem(nameStorage.listOfReading) ?? []
      const topGenres: string[] = JSON.parse(topGenreStr)
      const listOfReading: string[] =
        typeof listOfReadingStr === 'string' ? JSON.parse(listOfReadingStr) : listOfReadingStr

      /**
       * @TODO
       * Añadir sugerencia de otro género de libro para leer
       * El usuario añadio/leyó todos los libros de su preferencia
       */
      const suggestedBooks = books.filter(({ title, genre }) =>
        topGenres.some(
          (topGenre) => topGenre === genre && !listOfReading.some((reading) => reading === title)
        )
      )

      const random = Math.floor(Math.random() * suggestedBooks.length)

      setSuggestion(suggestedBooks[random])
    }
  }, [books, genres])

  return suggestion ? (
    <>
      <div className={suggestBookStyles.homeMain__suggestSection__info}>
        <h4 className={suggestBookStyles.homeMain__suggestSection__title}>{suggestion.title}</h4>
        <h5 className={suggestBookStyles.homeMain__suggestSection__subtitle}>
          {suggestion.author.name}
        </h5>
        <p className={suggestBookStyles.homeMain__suggestSection__synopsis}>
          {suggestion.synopsis}
        </p>
        <button className={suggestBookStyles.homeMain__suggestSection__info__button}>
          Añadir a la lista
        </button>
      </div>
      <Image src={suggestion.cover} alt={suggestion.title} width={145} height={217} priority />
    </>
  ) : null
}
