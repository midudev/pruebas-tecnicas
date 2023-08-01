import { Toaster } from 'react-hot-toast'
import { AvailableBookCard } from './BookCard'
import { Flex, HStack, Heading, Text } from '@chakra-ui/react'

export function AvailableBooks ({ available, filterByGenre, filterByPages, handleAddClick, crypto }) {
  return (
    <Flex flexDir='column' py='72px' px='80px'>
      <Heading as='h2' size='lg' pl='14' mb='20px'>Available books</Heading>
      <Text
        pl='14'
        mb='60px'
      >
        {filterByGenre === '' && filterByPages.length === 0
          ? available.length + ' results'
          : filterByGenre !== '' && filterByPages.length === 0
            ? available.filter((el) => el.book.genre === filterByGenre).length + ' results'
            : filterByGenre === '' && filterByPages.length === 2
              ? available.filter((el) => el.book.pages >= filterByPages[0] && el.book.pages <= filterByPages[1]).length + ' results'
              : filterByGenre !== '' && filterByPages.length === 2
                ? available.filter((el) => el.book.genre === filterByGenre && el.book.pages >= filterByPages[0] && el.book.pages <= filterByPages[1]).length + ' results'
                : available.length + ' results'}

      </Text>
      <HStack mb='60px' wrap='wrap' spacing='6'>
        {available.filter(function (el) {
          if (filterByGenre === '' && filterByPages.length === 0) {
            return el
          } else if (filterByGenre !== '' && filterByPages.length === 0) {
            return el.book.genre === filterByGenre
          } else if (filterByGenre === '' && filterByPages.length === 2) {
            return el.book.pages >= filterByPages[0] && el.book.pages <= filterByPages[1]
          } else if (filterByGenre !== '' && filterByPages.length === 2) {
            return el.book.genre === filterByGenre && el.book.pages >= filterByPages[0] && el.book.pages <= filterByPages[1]
          }
          return el
        }).map((el) =>
          <AvailableBookCard
            key={crypto.randomUUID()}
            el={el}
            handleAddClick={handleAddClick}
            crypto={crypto}
          />
        )}
      </HStack>
      <Toaster />
    </Flex>
  )
}