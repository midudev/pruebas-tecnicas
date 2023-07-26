import { useGlobalState } from "@/lib/globalContext";
import Book from "./Book";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
  DrawerHeader,
} from "@chakra-ui/react";

const ReadingList = ({ isOpen, onClose, btnRef }: any) => {
  const { data, addLibrary } = useGlobalState();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Lista de lectura</DrawerHeader>

          <DrawerBody>
            <div className="grid grid-cols-1 gap-4">
              {data.read.map((book) => (
                <Book key={book.ISBN} book={book} click={addLibrary} />
              ))}
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ReadingList;
