import { Center, Spinner, Stack } from "@chakra-ui/react"
import React from "react"
import Filter from "../components/filter"
import LibraryList from "../components/libraryList"

import { useBooksContextFilter } from "../hooks/useBooksContextFilter"
import Layout from "../layout/layout"

const HomePage: React.FC = () => {
  const { getBooksFilter } = useBooksContextFilter()
  const books = getBooksFilter()

  return (
    <Layout>
      <Stack direction={{ base: "column", md: "row" }} w="100%" gap={4}>
        <Stack w={{ base: "100%", md: "300px" }} as="aside">
          <Filter />
        </Stack>
        <Stack w={{ base: "100%", md: "calc( 100% - 300px)" }} as="section">
          {books && <LibraryList books={books} />}

          {!books && (
            <Center>
              <Spinner size={"xl"} />
            </Center>
          )}
        </Stack>
      </Stack>
    </Layout>
  )
}

export default HomePage
