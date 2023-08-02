import { BookType } from "@/types/data";
import {
  Modal,
  Tag,
  VStack,
  TagLabel,
  ModalOverlay,
  Text,
  Image,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Badge,
  Box,
} from "@chakra-ui/react";

type AboutBookProps = {
  isModalOpen: boolean;
  onModalClose: () => void;
  book: BookType | undefined;
};

const AboutBookModal = ({ isModalOpen, onModalClose, book }: AboutBookProps) => {
  return (
    <Modal isOpen={isModalOpen} onClose={onModalClose}>
      <ModalOverlay />
      <ModalContent>
        {book && (
          <>
            <ModalHeader>{`${book.title} (${book.year})`}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box
                display="flex"
                justifyContent="center"
                maxHeight={"300px"}
                mb="3"
              >
                <Image
                  objectFit="cover"
                  src={book.cover}
                  alt={`Cover of ${book.title}`}
                />
              </Box>
              <Box display="flex" alignItems="baseline" my="4">
                <Badge colorScheme="purple">{book.genre}</Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  {book.pages} paginas
                </Box>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  ISBN: {book.ISBN}
                </Box>
              </Box>
              <Text fontSize="lg" mb="2">
                {book.synopsis}
              </Text>

              <Text fontSize="medium">{`Escrito por ${book.author.name}`}</Text>

              <VStack spacing={1} align={"flex-start"}>
                <Text size={"sm"}>Otros libros:</Text>
                {book.author.otherBooks.map((value, key) => (
                  <Tag
                    size="md"
                    key={key}
                    borderRadius="full"
                    ml="1"
                    variant="solid"
                    colorScheme="green"
                  >
                    <TagLabel>{value}</TagLabel>
                  </Tag>
                ))}
              </VStack>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default AboutBookModal;
