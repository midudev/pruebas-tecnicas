import { Flex, Heading, Text, Button, useColorModeValue, RangeSlider, RangeSliderTrack, RangeSliderFilledTrack, RangeSliderThumb } from '@chakra-ui/react'

export function Filter ({ available, filterByGenre, setFilterByGenre, filterByPages, setFilterByPages, crypto }) {
  const color = useColorModeValue('black', 'white')

  let genres = new Set()

  available.forEach((el) => {
    genres.add(el.book.genre)
  })

  genres = Array.from(genres)

  function handleFilterClick (genre) {
    const newFilter = genre
    setFilterByGenre(newFilter)
  }

  function handleResetGenres () {
    setFilterByGenre('')
  }

  function handleResetPages () {
    setFilterByPages([])
  }

  let numberOfPages = new Set()

  available.forEach((el) => {
    numberOfPages.add(el.book.pages)
  })

  numberOfPages = Array.from(numberOfPages).sort((a, b) => a - b)

  const min = numberOfPages[0]
  const max = numberOfPages[numberOfPages.length - 1]

  function handlePagesChange (pages) {
    const newPagesRange = pages
    setFilterByPages(newPagesRange)
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
        mb='20px'
      >
        FILTER BY GENRE
      </Heading>

      {genres.map((el) =>
        <Button
          aria-label={el}
          display='flex'
          justifyContent='flex-start'
          size='sm'
          variant='ghost'
          colorScheme='black'
          color={color}
          isActive={filterByGenre === el}
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
        mb='60px'
        colorScheme='black'
        variant='outline'
        onClick={handleResetGenres}
      >
        Clean filter
      </Button>
      <Heading
        as='h3'
        size='xs'
        pl='2'
        mb='20px'
      >
        FILTER BY RANGE OF PAGES
      </Heading>

      <RangeSlider
        aria-label={['min', 'max']}
        defaultValue={[0, 240]}
        min={min}
        max={max}
        onChange={(e) => handlePagesChange(e)}
      >
        <RangeSliderTrack
          bg='red.100'
        >
          <RangeSliderFilledTrack
            bg='tomato'
          />
        </RangeSliderTrack>
        <RangeSliderThumb
          boxSize={6}
          index={0}
        />
        <RangeSliderThumb
          boxSize={6}
          index={1}
        />
      </RangeSlider>
      <Text
        fontSize='sm'
        pl='2'
        mb='20px'
      >
        {filterByPages[0]} - {filterByPages[1]} pages
      </Text>
      <Button
        aria-label='Clean filter'
        display='flex'
        justifyContent='flex-start'
        size='sm'
        mt='20px'
        mb='60px'
        colorScheme='black'
        variant='outline'
        onClick={handleResetPages}
      >
        Clean filter
      </Button>
    </Flex>
  )
}
