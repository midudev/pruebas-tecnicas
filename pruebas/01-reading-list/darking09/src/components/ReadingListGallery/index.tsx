import { ReadingListGalleryProps } from '@typesFiles/props/readingListGallery';
import { Book as BookType } from '@typesFiles/Books'
import Book from '@components/Book'
import ReadingListGalleryWrapper from '@components/ReadingListGalleryWrapper';

export default function ReadingListGallery({ books }: ReadingListGalleryProps) {
  return (
    <section className="row-span-2 col-span-1 pl-2 border-l border-gray-700 h-auto overflow-auto">
      <h3 className='hidden text-xl sm:block'>Lista de lectura</h3>
      <div className="grid grid-flow-row-dense grid-cols-2 gap-4 p-4">
        {
          books.map((b : BookType) => (
            <ReadingListGalleryWrapper book={b} key={b.ISBN}>
              <Book book={b} />
            </ReadingListGalleryWrapper>
          ))
        }
      </div>
    </section>
  )
}
