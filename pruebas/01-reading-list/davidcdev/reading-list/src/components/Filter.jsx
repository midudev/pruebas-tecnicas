import { Flex, Heading, Text, Button, useColorModeValue } from '@chakra-ui/react'

export function Filter ({ available, filter, setFilter, crypto }) {
  const color = useColorModeValue('black', 'white')

  let genres = new Set()

  available.forEach((el) => {
    genres.add(el.book.genre)
  })

  genres = Array.from(genres)

  function handleFilterClick (genre) {
    const newFilter = genre
    setFilter(newFilter)
    console.log(filter)
  }

  function handleResetClick () {
    setFilter('')
    console.log('filter was cleaned')
  }

  return (
    <Flex
      flexDir='column'
      pt='20'
      ml='120px'
    >
      <Heading
        as='h3'
        size='xs'
        pl='2'
      >
        FILTER
      </Heading>
      <Text
        fontSize='sm'
        pl='2'
        mb='20px'
      >
        {filter === ''
          ? available.length + ' books available'
          : available.filter((el) => el.book.genre === filter).length + ' books available'}
      </Text>
      {genres.map((el) =>
        <Button
          aria-label={el}
          display='flex'
          justifyContent='flex-start'
          size='sm'
          variant='ghost'
          colorScheme='orange'
          color={color}
          isActive={filter === el}
          pl='2'
          mb='8px'
          key={crypto.randomUUID()}
          onClick={() => handleFilterClick(el)}
        >
          {el}
        </Button>
      )}
      <Button
        aria-label='Clean filter'
        display='flex'
        justifyContent='flex-start'
        size='sm'
        mt='20px'
        colorScheme='orange'
        variant='outline'
        onClick={handleResetClick}
      >
        Clean filter
      </Button>
    </Flex>
  )
}
