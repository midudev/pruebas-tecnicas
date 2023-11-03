import type { Signal } from "@builder.io/qwik";
import {
  Slot,
  component$,
  createContextId,
  useContextProvider,
} from "@builder.io/qwik";
import useLocalStorage from "~/hooks/useLocalStorage";
import type { ReadList } from "~/types/books";

interface ReadListContextType {
  readList: Signal<ReadList>;
}

export const ReadListContext =
  createContextId<ReadListContextType>("books-list-context");

export const ReadListProvider = component$(() => {
  const readList = useLocalStorage<ReadList>("books-in-my-list", {});

  useContextProvider(ReadListContext, {
    readList,
  });
  return (
    <>
      <Slot />
    </>
  );
});
