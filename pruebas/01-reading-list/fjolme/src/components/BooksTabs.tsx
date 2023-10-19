import { BookWrapper } from '../types/types'
import { BooksTabSelected } from './BooksTabsSelected'
import { BooksTabUnselected } from './BooksTabsUnselected'

interface Props {
  booksWrapper: BookWrapper[],
  onlyAvailablesBooks: boolean,
  toggleOnlyAvailableBooks: () => void
}

export const BooksTabs = ({ booksWrapper, onlyAvailablesBooks, toggleOnlyAvailableBooks }: Props) => {
  const countOfBooks = booksWrapper.length
  const countOfAvailableBooks = booksWrapper.filter(bookWrapper => !bookWrapper.inReadingList).length

  const tabs = [
    {
      text: 'Total',
      count: countOfBooks,
      selected: !onlyAvailablesBooks
    },
    {
      text: 'Disponibles',
      count: countOfAvailableBooks,
      selected: onlyAvailablesBooks
    }
  ]

  return (
    <section className='flex gap-2 p-4 text-xs tracking-wide'>
      {tabs.map(tab => {
        return (
          tab.selected
            ? <BooksTabSelected
                key={tab.text}
                text={tab.text}
                count={tab.count}
              />
            : <BooksTabUnselected
                key={tab.text}
                text={tab.text}
                count={tab.count}
                onClick={toggleOnlyAvailableBooks}
              />
        )
      })}
    </section>
  )
}
