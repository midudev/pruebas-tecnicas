import { useListBook } from "../hook/useListBook"
import './bootoread.css'

export const BookToRead = () =>{

    const {read} = useListBook()
    return (
            <div className={`to-read ${read.length ? '' : 'hidden'}`}>
                <div className="container-list">
                    {
                    read.map((book=>(
                        <figure key={book.ISBN} className="figure">
                            <img src={book.cover} alt={book.title} />
                        </figure>
                    )))
                    
                    }
                    
                </div>
                
            </div>
    )
    
}