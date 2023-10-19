import { useListBook } from "../hook/useListBook"
import CloseButton from 'react-bootstrap/CloseButton'
import './bootoread.css'

export const BookToRead = () =>{

    const {read,removeToListRead} = useListBook()
    return (
            <div data-test-id='id-container-list-read' className='to-read'>
                <div className="container-list">
                    {
                    read.map((book=>(
                        <figure key={book.ISBN} className="figure">
                            <div className="close-button" data-bs-theme="dark">
                            <CloseButton onClick={()=>removeToListRead(book)}/>
                            </div>
                            <img src={book.cover} alt={book.title} />
                        </figure>
                    )))
                    
                    }
                    
                </div>
                
            </div>
    )
    
}