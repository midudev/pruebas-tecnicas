import { Books, Book, MaxAndMinPages } from '@typesFiles/Books'
import { HowManyBooksAre } from '@typesFiles/General'
import { Genres } from '@typesFiles/Genres'
import { supabase } from '@api/supabase'

const BOOK_JSON_PATH = 'src/api/data/books.json'

export const getBooks = async () : Promise<Books> => {
  const { data } = await supabase
  .from('books')
  .select('*')
  .order('id', {
    ascending: true
  })
  .returns<Books>()

  return data as Books
}

export const getHowManyBooksAre = async () : Promise<HowManyBooksAre> => {
  const readingList = await supabase
    .from('reading_lists')
    .select('id')
    .eq('name', 'default list')

  if (readingList?.error) {
    return {
      numberOfAvailableBooks: 0,
      numberOfBooksInReadingList: 0
    }
  }

  const numberOfBooksInReadingList = await supabase
    .rpc('count_books_in_reading_list', {
      reading_list: readingList?.data?.[0].id
    })
  console.log(numberOfBooksInReadingList)
  const numberOfAvailableBooks = await supabase
  .rpc('count_books_available')

  return {
    numberOfAvailableBooks: numberOfAvailableBooks.data ?? 0,
    numberOfBooksInReadingList: numberOfBooksInReadingList.data ?? 0
  }
}

export const getReadingListBooks = async () : Promise<Books> => {
  const readingList = await supabase
    .from('reading_lists')
    .select('id')
    .eq('name', 'default list')

  if (readingList?.error) {
    return []
  }

  const { data, error }  = await supabase
    .from('books_by_reading_lists')
    .select('books(*)')
    .eq('reading_list_id', readingList?.data?.[0].id)

  if (error) {
    return []
  }

  return data.map((b : any) => b.books) as Books
}

export const getGenres = async () : Promise<Genres> => {
  const { data } = await supabase
    .from('genres')
    .select('*')
    .order('id', {
      ascending: true
    })

  return data as Genres
}

export const getMaxAndMinPages = async () : Promise<MaxAndMinPages> => {
  const maxPages = await supabase
  .rpc('max_pages')

  const minPages = await supabase
  .rpc('min_pages')

  return {
    maxPage: maxPages.data ?? 0,
    minPage: minPages.data ?? 0
  }
}

export const addToReadingList = async (book : Book) => {
  const { data, error } = await supabase
    .from('reading_lists')
    .select('id')
    .eq('name', 'default list')

  if (!error) {
    const { error } = await supabase
      .from('books_by_reading_lists')
      .insert({ reading_list_id: data?.[0].id, book_id: book.id })

    if (!error) {
      const { error } = await supabase
        .from('books')
        .update({ is_available: false })
        .eq('id', book.id)
    }
  }

}

export const removeFromReadingList = async (book : Book) => {
  const { data, error } = await supabase
    .from('reading_lists')
    .select('id')
    .eq('name', 'default list')

  if (!error) {
    const { error } = await supabase
      .from('books_by_reading_lists')
      .delete()
      .eq('reading_list_id', data?.[0].id)
      .eq('book_id', book.id )

    if (!error) {
      const { error } = await supabase
        .from('books')
        .update({ is_available: true })
        .eq('id', book.id)
    }
  }

}
