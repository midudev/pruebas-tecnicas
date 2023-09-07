import { Card, CardBody, Image, Stack, Heading, Text, Button, CardFooter } from '@chakra-ui/react'

export function AvailableBookCard ({ el, handleAddClick, crypto }) {
  return (
    <Card
      w='xs'
      align='center'
      variant='unstyled'
      mb='60px'
      key={crypto.randomUUID()}
    >
      <CardBody
        align='center'
        mb='12px'
      >
        <Image
          loading='lazy'
          src={el.book.cover}
          alt={el.book.title + ' cover'}
          htmlHeight='280px'
          htmlWidth='200px'
        />
        <Stack
          mt='6'
          spacing='3'
        >
          <Heading
            as='h3'
            size='md'
            noOfLines='1'
          >
            {el.book.title}
          </Heading>
          <Text>
            {el.book.author.name}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button
          aria-label='Add to my list'
          onClick={() => handleAddClick(el.book)}
          size='lg'
        >
          Add to my list
        </Button>
      </CardFooter>
    </Card>
  )
}

export function MyListBookCard ({ el, handleRemoveClick, crypto }) {
  return (
    <Card
      w='xs'
      align='center'
      variant='unstyled'
      mb='60px'
      key={crypto.randomUUID()}
    >
      <CardBody
        align='center'
        mb='12px'
      >
        <Image
          loading='lazy'
          src={el.cover}
          alt={el.title + ' cover'}
          htmlHeight='280px'
          htmlWidth='200px'
        />
        <Stack
          mt='6'
          spacing='3'
        >
          <Heading
            as='h3'
            size='md'
            noOfLines='1'
          >
            {el.title}
          </Heading>
          <Text>
            {el.author.name}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button
          aria-label='Remove from my list'
          onClick={() => handleRemoveClick(el)}
        >
          Remove from my list
        </Button>
      </CardFooter>
    </Card>
  )
}
