<template>
  <Transition name="bounce">
    <div>
      <ListDropdown
        :list="uniqueGenreBooks"
        @drop-down-changed="changedGenre"
        class="mb-6"
      />
      <div v-if="!filteredBooks.length" class="my-4">
        {{ emptyNote }}
      </div>
      <TransitionGroup
        v-if="books.length"
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
        name="list"
        tag="div"
      >
        <BookCard
          v-for="(book, i) in filteredBooks"
          :book="book"
          :key="i"
          :type="type"
        />
      </TransitionGroup>
      <div v-else class="text-center">
        <div class="w-6 m-auto">
          <SpinnerItem />
        </div>
        <p class="italic mt-4">Cargando libros...</p>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import BookCard from "@/components/BookCard.vue";
import SpinnerItem from "@/components/SpinnerItem.vue";
import ListDropdown from "@/components/ListDropdown.vue";
import { ref, computed } from "vue";

const activeFilter = ref("Todos");
const importedGenreBooks = computed(() => {
  return props.books.map((book) => book.book.genre);
});
const uniqueGenreBooks = computed(() => {
  return ["Todos", ...new Set(importedGenreBooks.value)];
});
const filteredBooks = computed(() => {
  if (activeFilter.value === "Todos") return props.books;
  return props.books.filter((book) => book.book.genre === activeFilter.value);
});
const emptyNote = computed(() => {
  return `No hay libros con la categoría ${activeFilter.value}.`;
});
// eslint-disable-next-line no-undef
const props = defineProps({
  type: String,
  books: Object,
});

function changedGenre(type) {
  activeFilter.value = type;
}
</script>

<style lang="scss" scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
  position: relative;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>
