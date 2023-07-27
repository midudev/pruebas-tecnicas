import { Toaster } from 'react-hot-toast'
import { AvailableBookCard } from './BookCard'
import { Flex, HStack, Heading, Text } from '@chakra-ui/react'

export function AvailableBooks ({ available, filter, handleAddClick, crypto }) {
  return (
    <Flex flexDir='column' p='80px'>
      <Heading as='h2' size='lg' pl='14' mb='20px'>Available books</Heading>
      <Text
        pl='14'
        mb='60px'
      >
        {filter === ''
          ? available.length + ' books available'
          : available.filter((el) => el.book.genre === filter).length + ' books available'}
      </Text>
      <HStack mb='60px' wrap='wrap' spacing='6'>
        {available.filter((el) => el.book.genre === filter || filter === '').map((el) =>
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
