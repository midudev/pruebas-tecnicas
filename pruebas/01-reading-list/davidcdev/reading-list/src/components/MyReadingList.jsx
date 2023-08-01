import { Toaster } from 'react-hot-toast'
import { MyListBookCard } from './BookCard'
import { Flex, Heading, HStack, Text } from '@chakra-ui/react'

export function MyReadingList ({ myList, handleRemoveClick, crypto }) {
  return (
    <Flex flexDir='column' p='80px'>
      <Heading as='h2' size='lg' pl='14' mb='20px'>My reading list</Heading>
      <Text pl='14' mb='60px'>{myList.length === 0 ? 'There are no books in your list' : myList.length + ' books in your list'}</Text>
      <HStack mb='60px' wrap='wrap' spacing='6'>
        {myList.map((el) =>
          <MyListBookCard
            key={crypto.randomUUID()}
            el={el}
            handleRemoveClick={handleRemoveClick}
            crypto={crypto}
          />
        )}
      </HStack>
      <Toaster />
    </Flex>
  )
}
