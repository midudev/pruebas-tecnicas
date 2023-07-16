export const Books = ({books}) =>{
    return (

    <div className='container'>
        <div className='book-container'>
        {
            books.map(({book})=>(
            <div key={book.ISBN} className='book'>

                <figure className='img-container'>
                <img src={book.cover} alt={book.title} />
                </figure>

            </div>
            
            )
            )
            
        }
        </div>

    </div>

    )
}