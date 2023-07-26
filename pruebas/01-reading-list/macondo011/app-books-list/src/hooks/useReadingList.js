import { useContext } from 'react'
import { ReadingListContext } from '../components/context/ReadingListContext'


//hook que permite acceder al contexto.
export const useReadingList = ()=>{
    const ReadingList= useContext(ReadingListContext)

    if (ReadingList === undefined) {
        throw new Error('useReadingList must be used within a ReadingListProvider')
      }
    
      return ReadingList
    
}