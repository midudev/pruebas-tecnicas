import { useSelector } from "react-redux"
import { BookCard } from "./BookCard";

export const Books = () => {

    const { booksAvailable, myBooks } = useSelector(state => state.WhatABook);
    // console.log(booksAvailable,myBooks);

  return (
    <>
    
        <main className="mt-5 mx-auto mb-3 h-100">

            <div className={myBooks.length === 0 ? '' : 'Books'}>

                <section className="Books__available rounded border">

                    <div className="d-flex flex-column Books__header">

                        <h4>Libros disponibles: <span>{booksAvailable.length}</span></h4>

                    </div>

                    <div className={myBooks.length === 0 ? "mx-3 Books__cards mb-3" : "mx-3 Books__cards--smaller mb-3"}>

                        {

                            booksAvailable.map( ({book}) => (

                                <BookCard key={book.ISBN} book={book} type={1}/>

                            ))

                        }

                    </div>

                </section>

                {

                    myBooks.length === 0 ? (

                        <></>    
                        
                    ) : (

                        <section className="Books__myBooks rounded border">
  
                            <div className="d-flex flex-column Books__header">

                                <h4>Mis libros: <span>{myBooks.length}</span></h4>

                            </div>

                            <div className="mx-3 flex-grow-1">

                                <BookCard book={myBooks[0]} type={2}/>

                            </div>

                            <div className="d-flex justify-content-between mt-5 Book__footer">

                                <button className="btn Book__footerIcons"><img src="/src/assets/images/leftArrow.svg" alt="Flecha izquierda" width="20px" height="20px"/></button>
                                <button className="btn Book__footerIcons"><img src="/src/assets/images/rightArrow.svg" alt="Flecha derecha" width="20px" height="20px"/></button>

                            </div>
        
                        </section>

                    )

                }

            </div>

        </main>
    
    </>
  )
}
