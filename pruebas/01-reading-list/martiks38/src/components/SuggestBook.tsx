'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useBookList } from '@/hooks/useBookList'

import { toast } from 'react-toastify'

import { nameStorage } from '@/assets/constants'
import { books } from '@/assets/values'
import suggestBookStyles from '@/assets/styles/Book/SuggestBook.module.css'
import buttonStyle from '@/assets/styles/Book/Button.module.css'

import type { Book } from '@/typings/books'

const restartAnimation = (ev: React.MouseEvent<HTMLButtonElement>) => {
  const btn = ev.currentTarget

  btn.style.animationName = ''
  setTimeout(() => {
    btn.style.animationName = 'moveAddButton'
  })
}

export function SuggestBook() {
  const [suggestion, setSuggestion] = useState<Book | null>(null)
  const [isAdd, setIsAdd] = useState(false)
  const { readingList, addToReadingList } = useBookList()

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

  useEffect(() => {
    if (readingList.every(({ title }) => title !== suggestion?.title)) setIsAdd(false)
  }, [readingList, suggestion])

  const addBook = ({ ISBN, title }: { ISBN: string; title: string }) => {
    if (isAdd) return

    setIsAdd(true)
    addToReadingList({ ISBN })

    toast.success(`Se ha añadido: ${title}`)
  }

  return suggestion ? (
    <>
      <div className={suggestBookStyles.suggestSection__info}>
        <h4 className={suggestBookStyles.suggestSection__title}>{suggestion.title}</h4>
        <h5 className={suggestBookStyles.suggestSection__subtitle}>{suggestion.author.name}</h5>
        <p className={suggestBookStyles.suggestSection__synopsis}>{suggestion.synopsis}</p>
        <div className={suggestBookStyles.addBookContainer}>
          <button
            className={`${buttonStyle.actionButton} ${suggestBookStyles.suggestSection__info__button}`}
            onClick={() => addBook({ ISBN: suggestion.ISBN, title: suggestion.title })}
            onMouseLeave={restartAnimation}
            aria-disabled={isAdd}
            aria-describedby='disabledReasonSuggestBook'
          >
            <span>Añadir a la lista</span>
          </button>
          <p className={suggestBookStyles.tooltip} id='disabledReasonSuggestBook' role='tooltip'>
            Ya se encuentra en la lista
          </p>
        </div>
      </div>
      <Image src={suggestion.cover} alt={suggestion.title} width={145} height={217} priority />
    </>
  ) : null
}
