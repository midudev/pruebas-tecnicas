import { Box, Button, ButtonGroup, Flex, Heading, IconButton, Spacer, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export function Header () {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex h='100%' placeItems='center' mx='120px'>
      <Box p='2'>
        <Heading size='md' color='orange'>da</Heading><Heading size='md'>Books</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap='4'>
        <IconButton onClick={toggleColorMode} icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} />
        <Button colorScheme='orange' color='white'>Sign Up</Button>
        <Button colorScheme='orange' color='orange' variant='outline'>Log in</Button>
      </ButtonGroup>
    </Flex>
  )
}
