import { Filter } from './components/Filter'
import { AvailableBooks } from './components/AvailableBooks'
import { MyReadingList } from './components/MyReadingList'
import { useBooks } from './hooks/useBooks'

export function App () {
  const {
    available,
    myList,
    filter,
    setFilter,
    handleAddClick,
    handleRemoveClick,
    crypto
  } = useBooks()

  return (
    <>
      <Filter
        available={available}
        filter={filter}
        setFilter={setFilter}
        crypto={crypto}
      />

      <AvailableBooks
        available={available}
        filter={filter}
        handleAddClick={handleAddClick}
        crypto={crypto}
      />

      <MyReadingList
        myList={myList}
        handleRemoveClick={handleRemoveClick}
        crypto={crypto}
      />
    </>
  )
}
