import { useBearStore, useBookStore } from '../store/bookStore'

export const useInitializeBookList = () => {
  const { bookList } = useBookStore()
  const bear = useBearStore()
}
