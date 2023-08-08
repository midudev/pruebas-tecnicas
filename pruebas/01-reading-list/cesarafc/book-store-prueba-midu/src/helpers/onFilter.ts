import { Book } from "../types/bookType";

export const toFilter = (book: Book, searchTerm: string, genre: string, pages: number): boolean => {
    const todoText = book.title.toLowerCase();
    const searchText = searchTerm.toLowerCase();
    
    const titleMatch = searchTerm ? todoText.includes(searchText) : true;
    const genreMatch = genre ? book.genre === genre : true;
    const pagesMatch = pages ? book.pages >= pages : true;
    
    return titleMatch && genreMatch && pagesMatch;
}