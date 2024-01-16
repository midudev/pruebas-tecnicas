import React, { useRef } from 'react'
import { useSearch } from '../../hooks/useSearch'
import componentClasses from './SearchBooks.module.css'
import { SearchIcon } from '../Icons/Icons'
import { FIELD_LABELS } from '../../constants/DOM-text'
import { PLACEHOLDERS } from '../../constants/element-attributes'
import { ARIA_LABELS } from '../../constants/aria-labels'

export function SearchBooks () {
  const inputRef = useRef<HTMLInputElement>(null)
  const { updateSearch } = useSearch()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const inputValue = inputRef.current?.value

    if (inputValue != null) {
      updateSearch(inputValue)
    }
  }

  return (
        <form
          className={componentClasses.searchForm}
          onSubmit={handleSubmit}
        >
          <label>
            {FIELD_LABELS.SearchBooks}
            <input
                aria-label={ARIA_LABELS.SearchInput}
                className={componentClasses.searchInput}
                ref={inputRef}
                type="search"
                placeholder={PLACEHOLDERS.SearchInput}
            />
          </label>
          <button
            type="submit"
            className={componentClasses.searchButton }
            aria-label={ARIA_LABELS.SearchButton}
          >
            <SearchIcon />
          </button>
        </form>
  )
}
