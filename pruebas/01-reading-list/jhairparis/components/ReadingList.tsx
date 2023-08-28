import { useGlobalState } from "@/lib/globalContext";
import Book from "./Book";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
} from "@chakra-ui/react";
import type { BookType } from "@/types/data";

type ReadingListProps = {
  isDrawerOpen: boolean;
  onDrawerClose: () => void;
  openModal: (b: BookType) => void;
};

const ReadingList = ({
  isDrawerOpen,
  onDrawerClose,
  openModal,
}: ReadingListProps) => {
  const { data, addLibrary } = useGlobalState();

  return (
    <Drawer isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Lista de lectura</DrawerHeader>

        <DrawerBody>
          <div className="grid grid-cols-1 gap-4">
            {data.read.map((book) => (
              <Book
                key={book.ISBN}
                book={book}
                click={addLibrary}
                openModal={openModal}
              />
            ))}
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default ReadingList;
