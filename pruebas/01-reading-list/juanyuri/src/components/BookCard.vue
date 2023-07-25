<template>
    <div class="BookCard">
        <div class="BookCard-Image">
            <img :src="book.cover" width="250" height="420" />
            <div class="BookCard-Overlay">
                <div class="BookCard-Overlay-Text">
                    <p>Añadir a Favoritos</p>
                    <!-- <p>{{ book.author.name }}</p> -->
                </div>
            </div>
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
    position: relative;
    flex: 1;
    height: 500px;
    /* background-color: blue; */
}

.BookCard-Image {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    width: 250px;
    height: 420px;
}

.BookCard-Image img {
    object-fit: cover;
    transition: transform 0.3s ease-in-out;
}

.BookCard:hover .BookCard-Image img {
    transform: scale(1.1);
    filter: grayscale(100%);
}

.BookCard-Overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.BookCard:hover .BookCard-Overlay {
    opacity: 1;
}

.BookCard-Overlay-Text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #fff;
}

.BookCard-Overlay-Text p {
    margin: 0;
    font-size: 2em;
    font-weight: bold;
    color: #DAAA63;
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
    font-size: 1.05em;
    max-width: 100%;
}
</style>