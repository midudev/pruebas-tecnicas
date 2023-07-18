import { useListBook } from "../hook/useListBook"

export const Books = ({books}) =>{ 
    const {read,addtoToListRead, removeToListRead} = useListBook()

    const isInList =(book)=>(read.some(item=>item.ISBN===book.ISBN)) 
    
    return (

    <div className='container'>
        <div className='book-container' data-testid='book-container-id'>
        {
            books.map(({book})=>(
            <div key={book.ISBN} className='book'>

                <figure className='img-container'>
                <img src={book.cover} alt={book.title} onClick={()=>(

                        isInList(book) ? removeToListRead(book): addtoToListRead(book)

                )} className={isInList(book)? 'img-opacity':''}/>
                </figure>

            </div>
            
            )
            )
            
        }
        </div>
    </div>

    )
}