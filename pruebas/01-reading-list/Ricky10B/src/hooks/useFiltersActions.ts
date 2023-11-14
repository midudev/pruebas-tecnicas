import { CardBookProps } from '../interfaces/interfacesComponents'
import { useAppSelector, useAppDispatch } from './store'
import { setNewGenre } from '../reducers/filters'

export function useFilters () {
  const { filterGenre } = useAppSelector(state => state.filtersReducer)
  const dispatch = useAppDispatch()

  const filterLibraries = (libraries: CardBookProps[]) => {
    return libraries.filter(({ book }) =>
      filterGenre === '' || book.genre === filterGenre
    )
  }

  const handleNewGenre = ({ genre }: { genre: string }) => {
    dispatch(setNewGenre({ filterGenre: genre }))
  }

  return {
    filterGenre,
    filterLibraries,
    handleNewGenre
  }
}
