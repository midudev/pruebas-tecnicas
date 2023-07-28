import { Filter } from './components/Filter'
import { AvailableBooks } from './components/AvailableBooks'
import { MyReadingList } from './components/MyReadingList'
import { useBooks } from './hooks/useBooks'
import { Grid, GridItem } from '@chakra-ui/react'
import { Header } from './components/Header'

export function App () {
  const {
    available,
    myList,
    filterByGenre,
    setFilterByGenre,
    filterByPages,
    setFilterByPages,
    handleAddClick,
    handleRemoveClick,
    crypto
  } = useBooks()

  return (
    <Grid
      templateAreas={`"header header"
                      "nav available"
                      "nav myList"`}
      gridTemplateRows='72px 1fr 1fr'
      gridTemplateColumns='300px 1fr'
      gap='1'
      h='100vh'
    >
      <GridItem area='header'>
        <Header />
      </GridItem>
      <GridItem area='nav'>
        <Filter
          available={available}
          filterByGenre={filterByGenre}
          setFilterByGenre={setFilterByGenre}
          filterByPages={filterByPages}
          setFilterByPages={setFilterByPages}
          crypto={crypto}
        />
      </GridItem>
      <GridItem pl='2' area='available'>
        <AvailableBooks
          available={available}
          filterByGenre={filterByGenre}
          filterByPages={filterByPages}
          handleAddClick={handleAddClick}
          crypto={crypto}
        />
      </GridItem>
      <GridItem pl='2' area='myList'>
        <MyReadingList
          myList={myList}
          handleRemoveClick={handleRemoveClick}
          crypto={crypto}
        />
      </GridItem>
    </Grid>
  )
}
