<script setup>
import { onMounted } from 'vue';

const props = defineProps({
  book: {
    type: Object,
    required: true
  }
})

// console.log(props.book)

onMounted(() => {
    // console.log(props.book)
})
</script>

<template>
  <article class="relative rounded-md overflow-hidden transition cursor-pointer hover:-translate-y-1 hover:shadow-lg">
    <img :src="book.cover" class="h-full"/>
    <div class="absolute flex justify-center p-4 items-end top-0 left-0 h-full transition opacity-0 hover:opacity-100 w-full bg-gradient-to-b from-transparent to-black/90">
      <h4 class="font-semibold text-white text-center text-lg">{{ book.title }}</h4>
    </div>
  </article>
</template>