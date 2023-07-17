import { Book } from '@/components'
import { useLibraryStore } from '@/store/Library.store'
import { type IWrapedBook, type TWrapedBooks } from '@/types'
import { toast } from 'sonner'

interface IProps {
  data: TWrapedBooks
}
export const ListOfBooks: React.FC<IProps> = ({ data }) => {
  const toggleBookReadList = useLibraryStore((state) => state.toggleBookReadList)

  const handleOnBookClick = (data: IWrapedBook) => () => { // Here by testing
    const operationState = toggleBookReadList(data)
    toast.success(operationState)
  }

  return data.map((wrapedBook) => (<Book key={wrapedBook.book.ISBN} data={wrapedBook} onClick={handleOnBookClick(wrapedBook)}/>))
}
