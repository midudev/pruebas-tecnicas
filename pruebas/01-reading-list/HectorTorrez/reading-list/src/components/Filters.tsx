import {useState} from 'react'
import { useAppSelector } from "../hooks/store"

export const Filters = () => {

    const [genre, setGenre] = useState()
    console.log(genre)
    const book = useAppSelector(state => state.books.books)
   
        

  return (
    <section>

        <section>
            <select name="" id="">
                <option value="">Genre</option>
                {
                    book.map(item => {
                        return <option key={item.book.genre} value={item.book.genre}>{item.book.genre}</option>
                    })
                }
            </select>
        </section>
    </section>
  )
}