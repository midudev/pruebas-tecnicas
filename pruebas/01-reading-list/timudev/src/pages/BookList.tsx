import { BookCard, BookImage, BookTitle, BookButtons } from '../components';
import { useReadingList } from '../hooks/useReadingList';

import data from '../data/books.json';

import '../styles/custom-styles.css';


export const BookList = () => {

    const { readingList, onBookReadingChange} = useReadingList();
    
    const books = data.library.map( item => item.book );
    
    return (
        <div>
            
            <h1>Book List</h1>
            <hr />
            
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}> 

                {
                    books.map( book => (
                        <BookCard
                            key={ book.ISBN }
                            book={ book }
                            className="bg-dark text-white"
                            onChange={ onBookReadingChange }
                            value={ readingList[book.ISBN]?.readingList }
                        >
                            <BookImage style={ readingList[book.ISBN]?.readingList ? { opacity: 0.25} : {}}/>
                            <BookTitle className="text-bold" />
                            <BookButtons className="custom-buttons" />
                        </BookCard>
                    ))
                }

            </div>

            <div className='book-reading-list'>
                {
                    Object.entries(readingList).map( ([key, book]) => (
                        <BookCard 
                            key={ key }    
                            book={ book }
                            className="bg-dark text-white"
                            style={{ width: '100px' }}
                            value={ book.readingList }
                            onChange={ onBookReadingChange }
                        >
                            <BookImage className="custom-image" />
                            <BookButtons 
                                className="custom-buttons" 
                                style={{ 
                                    display: 'flex',
                                    justifyContent: 'center',
                                }}
                            />
                        </BookCard>
                    ))  
                }
            </div>
            
        </div>
    )
}
