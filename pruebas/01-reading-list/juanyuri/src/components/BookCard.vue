<template>
    <div class="BookCard">
        <div class="BookCard-title">{{ book.title }}</div>
        <!-- <div class="BookCard-pages">{{ book.pages }}</div> -->
        <div class="BookCard-genre">, {{ book.genre }}</div>
        <!-- <div class="BookCard-year">{{ book.year }}</div>
        <div class="BookCard-author-name">{{ book.author.name }}</div> -->
    </div>
</template>

<script setup>
const props = defineProps({
    book: { type: Object, required: true }
});
</script>


<style scoped>
.BookCard {
    display: flex;
    align-items: center;
    margin: 1rem;
    background-color: rgba(211, 91, 32, 0.971);
    padding:20px;
}
</style>