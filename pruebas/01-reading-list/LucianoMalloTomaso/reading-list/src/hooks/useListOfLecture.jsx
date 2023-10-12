import { useContext } from 'react'
import { ListOfLecture } from '../contexts/listOfLecture.jsx'

export function useListOfLecture () {
  const list = useContext(ListOfLecture)

  if (list === undefined) {
    throw new Error('useListOfLecture must be used within a ListOfLectureProvider')
  }
  return list
}
