import type { Signal } from "@builder.io/qwik";
import { component$, useSignal } from "@builder.io/qwik";
import { HStack } from "~/styled-system/jsx";
import TextInput from "./text-input";
import { SearchIcon } from "../icons/search-icon";
import { css } from "~/styled-system/css";

interface SearchInputProps {
  value: Signal<string>;
}

export const SearchInput = component$(({ value }: SearchInputProps) => {
  const inputRef = useSignal<HTMLInputElement>();
  return (
    <HStack
      position="relative"
      cursor="text"
      flexGrow="1"
      onClick$={() => {
        inputRef.value?.focus();
      }}
    >
      <SearchIcon
        class={css({
          stroke: "currentcolor",
          w: "1.5rem",
          h: "1.5rem",
          position: "absolute",
          left: "0",
          ml: "12px",
        })}
      ></SearchIcon>
      <TextInput
        type="search"
        placeholder="Buscar..."
        value={value.value}
        onInput$={(_, el) => {
          value.value = el.value;
        }}
        pl="2.5rem !important"
        w="full"
        ref={inputRef}
      />
    </HStack>
  );
});
