'use client'
import React from 'react'
import { ADD_TO_READING_LIST } from '../constants.texts'
import { useBookStore } from '../store/bookStore'

interface IButton {
    ISBN: IReadingListBook['ISBN']
}

export default function Button (props: IButton) {
  const { ISBN } = props

  const { removeBookFromReadingList } = useBookStore()

  return (
    <button
      className='bg-white text-gray-800 text-sm  w-full rounded-full'
      onClick={() => removeBookFromReadingList(ISBN)}
    >
      {ADD_TO_READING_LIST}
    </button>
  )
}
