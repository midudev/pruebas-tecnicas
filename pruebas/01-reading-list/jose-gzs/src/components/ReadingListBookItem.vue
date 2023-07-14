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
    console.log(props.book)
})
</script>

<template>
    <div class="rounded-md overflow-hidden shadow-md">
        <img :src="book.cover" class="h-full"/>
    </div>
</template>