"use client";
import Library from "@/components/Library";
import ReadingList from "@/components/ReadingList";
import { Heading, useDisclosure, HStack, Divider } from "@chakra-ui/react";
import { useGlobalState } from "@/lib/globalContext";
import { ReadStorage, StorageKey, WriteStorage } from "@/lib/Storage";
import { useEffect } from "react";
import ReadListIcon from "@/components/ReadListIcon";
import AboutBookModal from "@/components/AboutBookModal";
import useAboutBookModal from "@/hooks/useAboutBookModal";
import Filters from "@/components/Filters";

export default function Home() {
  const { setGlobalState, data, setFromJson } = useGlobalState();

  useEffect(() => {
    const saved = ReadStorage(true);

    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === StorageKey && event.newValue) {
        const res = ReadStorage(false, event.newValue);
        if (res) setGlobalState(res);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    if (saved) {
      setGlobalState(saved);
    } else {
      setFromJson();
    }

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    WriteStorage(data);
  }, [data]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isModalOpen, onModalClose, book, onModalOpen } = useAboutBookModal();

  return (
    <main className="p-10">
      <HStack spacing={"24px"} mb={"24px"}>
        <Heading>Digital library</Heading>
        <ReadListIcon onOpen={onOpen} />
      </HStack>
      <Filters />
      <Divider />
      <Library openModal={onModalOpen} />
      <ReadingList
        isDrawerOpen={isOpen}
        onDrawerClose={onClose}
        openModal={onModalOpen}
      />
      <AboutBookModal
        isModalOpen={isModalOpen}
        onModalClose={onModalClose}
        book={book}
      />
    </main>
  );
}
