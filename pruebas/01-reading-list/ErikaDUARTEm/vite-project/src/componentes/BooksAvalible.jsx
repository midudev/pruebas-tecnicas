

export default function BooksAvalible(props) {
    
  
  return (
    <div className="section-books">
        <ul className='all-books'>
        {props.books.map((book, index) => (
          <section className="card" key={index}>
                <div className="portada">
                    <img src={book.cover}/>
                </div>
                <div className="description">
                  <div>
                    <p><strong>Title:</strong> {book.title}</p>
                    <p><strong>Synopsis:</strong> {book.synopsis}</p>
                    <p><strong>Género:</strong> {book.genre}</p>
                    <p><strong>N° de pages:</strong> {book.pages}</p>
                    <p><strong>Año:</strong> {book.year}</p>
                  </div>
                  <div className="button-add-list">
                      <button type="button" className="add-list">Add list</button>

                    </div>

                </div>
          </section>
          
        ))}
      </ul>
    </div>
  )
}
