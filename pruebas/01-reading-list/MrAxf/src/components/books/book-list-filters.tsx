import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { HStack, VStack, Wrap, styled } from "~/styled-system/jsx";
import { SearchInput } from "../forms/search-input";
import SelectInput from "../forms/select-input";
import type { BooksFilter } from "~/types/books";
import Button from "../forms/button";
import { ArrowDownIcon } from "../icons/arrow-down";
import { css } from "~/styled-system/css";

interface BookListFiltersProps {
  filters: BooksFilter;
  genres: string[];
  showPriorityOrder?: boolean;
}

export const BookListFilters = component$(
  ({ filters, genres, showPriorityOrder = false }: BookListFiltersProps) => {
    const searchText = useSignal("");

    useTask$(({ track, cleanup }) => {
      track(() => searchText.value);

      const debounced = setTimeout(() => {
        if (searchText.value.replace(" ", "").length >= 3)
          filters.searchText = searchText.value;
        else filters.searchText = undefined;
      }, 300);

      cleanup(() => clearTimeout(debounced));
    });
    return (
      <Wrap w="full" gap="10" pb="5">
        <HStack flexGrow="1" w="full" sm={{ w: "auto" }}>
          <SearchInput value={searchText} />
        </HStack>
        <HStack>
          <label for="filter-genre">Género:</label>
          <SelectInput
            name="filter-genre"
            id="filter-genre"
            value={filters.genre}
            onInput$={(_, el) => (filters.genre = el.value)}
          >
            <option value={"none"} selected>
              No Filtrar
            </option>
            {genres.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </SelectInput>
        </HStack>

        <HStack>
          <label for="filter-pages">Páginas:</label>
          <VStack gap="0">
            <input
              type="range"
              name="filter-pages"
              id="filter-pages"
              min={0}
              max={1000}
              step={100}
              value={filters.minPages || 0}
              onInput$={(_, el) => (filters.minPages = Number(el.value))}
            />
            <styled.span fontSize="xs">
              Más de {filters.minPages} páginas
            </styled.span>
          </VStack>
        </HStack>

        {showPriorityOrder && (
          <Button
            onClick$={() => {
              filters.priorityOrder = !filters.priorityOrder;
            }}
          >
            Prioridad{" "}
            <ArrowDownIcon
              class={[
                css({
                  w: "1rem",
                  h: "1rem",
                  transitionProperty: "all",
                  transitionDuration: "fast",
                  transitionTimingFunction: "ease-in-out",
                }),
                {
                  [css({
                    rotate: "180deg",
                  })]: !filters.priorityOrder,
                },
              ]}
            />
          </Button>
        )}
      </Wrap>
    );
  }
);
