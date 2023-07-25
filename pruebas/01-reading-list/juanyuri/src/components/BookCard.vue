<template>
    <div class="BookCard">
        <div class="BookCard-Image">
            <img :src="book.cover" width="200" height="300" />
        </div>
        <div class="BookCard-Details">
            <div class="BookCard-Title">{{ book.title }}</div>
            <div class="BookCard-Author-Name">{{ book.author.name }}</div>
        </div>
    </div>
</template>
  
<script setup>
const props = defineProps({
    book: { type: Object, required: true }
})
</script>


<style scoped>
.BookCard {
    display: flex;
    flex-direction: column;
    margin: 10px;
    cursor: pointer;
}

.BookCard-Image img:hover {
    opacity: 0.85;
    transition-duration: 400ms;
    box-shadow: 0px 7px 12px 2px #8d8d8d;
}

.BookCard-Image img {
    border-radius: 12px;
}

.BookCard-Details {
    display: flex;
    flex-direction: column;
    width: 200px;
}

.BookCard-Title {
    margin-top: 10px;
    font-weight: 800;
    font-size: 1em;
    max-width: 100%;
}

.BookCard-Author-Name {
    margin-top: 5px;
    font-weight: lighter;
    font-size: 0.85em;
    max-width: 100%;
}
</style>