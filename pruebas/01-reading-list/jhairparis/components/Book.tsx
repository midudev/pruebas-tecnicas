import { Card, Image } from "@chakra-ui/react";

const Book = ({ book, click }: any) => {
  return (
    <Card maxW={{ base: "100%", sm: "200px" }} onClick={(e) => click(book)}>
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={book.cover}
        alt="Caffe Latte"
      />
      <p>{book.genre}</p>
    </Card>
  );
};

export default Book;
