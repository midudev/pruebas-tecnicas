import { Box, Button, ButtonGroup, Flex, Heading, IconButton, Spacer, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { notifyMock } from '../logic/notifications'

export function Header () {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex h='100%' placeItems='center' mx='120px'>
      <Box p='2'>
        <Heading size='md' color='orangered'>da</Heading><Heading size='md'>Books</Heading>
      </Box>
      <Spacer />
      <ButtonGroup gap='4'>
        <IconButton bg='transparent' fontSize='xl' aria-label='switch to dark mode button' onClick={toggleColorMode} icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />} />
        <Button onClick={() => notifyMock()}>Sign Up</Button>
        <Button onClick={() => notifyMock()} variant='outline'>Log in</Button>
      </ButtonGroup>
    </Flex>
  )
}
