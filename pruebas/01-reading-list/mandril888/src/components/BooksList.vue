<template>
  <Transition name="bounce">
    <TransitionGroup
      v-if="books.length"
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
      name="list"
      tag="div"
    >
      <BookCard v-for="(book, i) in books" :book="book" :key="i" :type="type" />
    </TransitionGroup>
    <div v-else class="text-center">
      <div class="w-6 m-auto">
        <SpinnerItem />
      </div>
      <p class="italic mt-4">Cargando libros...</p>
    </div>
  </Transition>
</template>

<script setup>
import BookCard from "@/components/BookCard.vue";
import SpinnerItem from "@/components/SpinnerItem.vue";

// eslint-disable-next-line no-undef
defineProps({
  type: String,
  books: Object,
});
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
