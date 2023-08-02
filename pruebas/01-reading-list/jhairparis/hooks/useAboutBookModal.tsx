import { BookType } from "@/types/data";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

const useAboutBookModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [book, setBook] = useState<BookType | undefined>(undefined);

  const open = (book: BookType) => {
    setBook(book);
    onOpen();
  };

  return {
    isModalOpen: isOpen,
    onModalOpen: open,
    onModalClose: onClose,
    book,
  };
};

export default useAboutBookModal;
