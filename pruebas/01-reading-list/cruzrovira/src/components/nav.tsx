import {
  Container,
  Heading,
  Icon,
  Link,
  Stack,
  Tooltip,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react"
import React from "react"
import { FaBook, FaRegMoon, FaSun } from "react-icons/fa6"
import { Link as ReachLink } from "react-router-dom"
import DrawerReadingBook from "./DrawerReadingBook"

type props = {}
const Nav: React.FC<props> = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <>
      <Stack as={"nav"} p={2} bg={"teal"} w="100%">
        <Container
          maxW={"container.xl"}
          display={"flex"}
          justifyContent={"space-between"}
        >
          <Link
            as={ReachLink}
            to="/"
            textDecoration={"none"}
            _hover={{ textDecoration: "none" }}
          >
            <Heading color={"white"} fontSize={20}>
              Reader Book
            </Heading>
          </Link>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Tooltip label="Theme Color" aria-label="Theme Color">
              <Link
                onClick={e => {
                  e.preventDefault()
                  toggleColorMode()
                }}
                _hover={{ textDecoration: "none" }}
              >
                {colorMode === "light" ? (
                  <Icon as={FaRegMoon} color={"white"} />
                ) : (
                  <Icon as={FaSun} color={"white"} />
                )}
              </Link>
            </Tooltip>
            <Tooltip label="Reading Book" aria-label="Reading Book">
              <Link
                onClick={e => {
                  e.preventDefault()
                  onOpen()
                }}
                _hover={{ textDecoration: "none" }}
              >
                <Icon as={FaBook} color={"white"} />
              </Link>
            </Tooltip>
          </Stack>
        </Container>
      </Stack>
      <DrawerReadingBook isOpen={isOpen} onClose={onClose} />
    </>
  )
}

export default Nav
