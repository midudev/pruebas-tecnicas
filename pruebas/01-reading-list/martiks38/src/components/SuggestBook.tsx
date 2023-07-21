'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useBookList } from '@/hooks/useBookList'

import { nameStorage } from '@/assets/constants'
import { books } from '@/assets/values'
import suggestBookStyles from '@/assets/styles/Layout/Home.module.css'

import type { Book } from '@/typings/books'

export function SuggestBook() {
  const [suggestion, setSuggestion] = useState<Book | null>(null)
  const { addToReadingList } = useBookList()

  useEffect(() => {
    const topGenresStr = window.localStorage.getItem(nameStorage.topGenre)

    if (!topGenresStr) {
      const random = Math.floor(Math.random() * books.length)
      setSuggestion(books[random])
    } else {
      const topGenres: string[] = JSON.parse(topGenresStr)

      const suggestedBooks = books.filter(({ genre }) =>
        topGenres.some((topGenre) => topGenre === genre)
      )

      const random = Math.floor(Math.random() * suggestedBooks.length)
      setSuggestion(suggestedBooks[random])
    }
  }, [])

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
        <button
          className={suggestBookStyles.homeMain__suggestSection__info__button}
          onClick={() => addToReadingList({ ISBN: suggestion.ISBN })}
        >
          Añadir a la lista
        </button>
      </div>
      <Image src={suggestion.cover} alt={suggestion.title} width={145} height={217} priority />
    </>
  ) : null
}
