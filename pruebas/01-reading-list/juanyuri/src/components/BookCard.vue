<template>
    <div class="BookCard">
        <div class="BookCard-Image">
            <img :src="book.cover" width="250" height="420" />
            <div class="BookCard-Overlay">
                <div class="BookCard-Overlay-Text">
                    <p>{{ book.pages }} páginas</p>
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
}

.BookCard-Image {
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    width: var(--image-width);
    height: var(--image-height);
    filter: brightness(100%);
    transition: filter 0.5s ease-in-out;
}

.BookCard:hover .BookCard-Image img {
    filter: brightness(60%);

}


.BookCard-Image img {
    object-fit: cover;
    transition: transform 0.5s ease-in-out;
}

.BookCard-Overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--overlay-color);
    opacity: 0;
    transition: opacity 0.43s ease-in-out;
}

.BookCard:hover .BookCard-Overlay {
    opacity: 1;
}

.BookCard:hover .BookCard-Image img {
    /* transform: scale(1.1); */
    filter: grayscale(100%);
}

.BookCard-Overlay-Text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: var(--overlay-text-color);
}

.BookCard-Overlay-Text p {
    color: white;
    font-size: 2.3em;
    font-weight: var(--title-font-weight);
}

.BookCard-Details {
    display: flex;
    flex-direction: column;
    margin-right:auto;
    margin-top:4px;
    width: 200px;
}

.BookCard-Title {
    margin-top: 10px;
    font-weight: var(--title-font-weight);
    font-size: var(--title-font-size);
    max-width: 100%;
}

.BookCard-Author-Name {
    margin-top: 5px;
    font-weight: var(--author-name-font-weight);
    font-size: var(--author-name-font-size);
    max-width: 100%;
}
</style>