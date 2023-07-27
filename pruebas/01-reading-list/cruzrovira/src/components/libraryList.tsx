import { Grid } from "@chakra-ui/react"
import React from "react"
import { Book } from "../types/data"
import CartBook from "./cartBook"

type props = { books: Book[] }

const LibraryList: React.FC<props> = ({ books }) => {
  return (
    <Grid
      gridTemplateColumns={"repeat(auto-fit, 200px)"}
      gap={4}
      justifyContent={{ base: "center", md: "flex-start" }}
    >
      {books.map(book => (
        <CartBook key={book.ISBN} book={book} />
      ))}
    </Grid>
  )
}

export default LibraryList
