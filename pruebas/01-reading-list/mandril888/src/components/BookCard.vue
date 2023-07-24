<template>
  <div v-show="showCard">
    <img
      :src="book.book.cover"
      :alt="book.book.title"
      class="w-full object-cover rounded-lg shadow-md max-h-96"
    />
    <div class="relative px-4 -mt-16">
      <div class="bg-white p-6 rounded-md shadow-lg">
        <h4 class="mt-1 text-xl font-semibold leading-tight truncate">
          {{ book.book.title }}
        </h4>
        <p>{{ type }}</p>
        <button
          v-show="type === 'bookAvilable'"
          class="block"
          @click="$booksStore.addBookList(book)"
        >
          Add book
        </button>
        <button
          v-show="type === 'bookList'"
          class="block"
          @click="$booksStore.removeBookList(this.$.vnode.key)"
        >
          Remove book
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useBooksStore } from "@/stores/BooksStore";
import { ref, computed, watch } from "vue";

const $booksStore = useBooksStore();
const totalBooksList = computed(() => {
  return $booksStore.totalBooksList;
});

const showCard = ref(
  props.type === "bookList"
    ? true
    : !$booksStore.booksList.some(
        (bookList) => bookList.book.title == props.book.book.title
      )
);

watch(totalBooksList, () => {
  showCard.value =
    props.type === "bookList"
      ? true
      : !$booksStore.booksList.some(
          (bookList) => bookList.book.title == props.book.book.title
        );
});

// eslint-disable-next-line no-undef
const props = defineProps({
  type: String,
  book: Object,
});
</script>

<style lang="scss" scoped></style>
