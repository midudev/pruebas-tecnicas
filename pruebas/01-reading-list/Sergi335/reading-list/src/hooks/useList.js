import { useContext } from 'react'
import { ReadingListContext } from '../context/ReadListContext'

export const useList = () => {
  const list = useContext(ReadingListContext)
  if (list === undefined) {
    throw new Error('list cant be undefined')
  }
  return list
}
