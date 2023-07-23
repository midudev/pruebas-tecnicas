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
});
</script>
  
<style scoped>
.BookCard {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    margin: 10px;
    /* background-color: rgb(0, 255, 136); */
    cursor: pointer;
}

.BookCard-Details {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    width: 200px;
    /* set width to the same as the image width */
}

.BookCard-Title {
    margin-top: 10px;
    font-weight: 800;
    font-size: .9em;
    max-width: 100%;
    /* set max-width to 100% of the container div */
    /* text-align: center; */
}

.BookCard-Author-Name {
    margin-top: 5px;
    font-weight: lighter;
    font-size: 0.75em;
    max-width: 100%;
    /* set max-width to 100% of the container div */
    /* text-align: center; */
}</style>