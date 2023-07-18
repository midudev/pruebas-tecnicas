import { BookCard } from '../components/BookCard';
import { BookImage } from '../components/BookImage';
import { BookTitle } from '../components/BookTitle';
import { BookButtons } from '../components/BookButtons';
import { useReadingList } from '../hooks/useReadingList';

import data from '../data/books.json';
import { Library } from '../interfaces/interfaces';

import '../styles/custom-styles.css';


export const BookStore = () => {

    //const { shoppingCart, onProductCountChange } = useShoppingCart();
    const { readingList, onBookReadingChange} = useReadingList();

    const library: Library[] = data.library;

    console.log(readingList);
    
    return (
        <div>
            <h1>Book Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}> 

                {
                    library.map( book => (
                        <BookCard
                            key={ book.book.ISBN }
                            book={ book.book }
                            className="bg-dark text-white"
                            onChange={ onBookReadingChange }
                            value={ readingList[book.book.ISBN]?.readingList }
                        >
                            <BookImage />
                            <BookTitle className="text-bold" />
                            <BookButtons className="custom-buttons" />
                        </BookCard>
                    ))
                }

            </div>

            <div className='book-store'>
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
