<script setup lang="ts">
import booksData from './books.json';
import { ref } from 'vue';

const selectedType = ref('All');
const books = ref(booksData['library']);

function getBooks() {
  return booksData['library'];
}

function getFilteredBooks() {
  if (selectedType.value === 'All') {
    return getBooks();
  }
  return booksData['library'].filter(book => book.book.genre === selectedType.value);
}

function getGenres() {
  const genres = new Set();
  booksData['library'].forEach(book => genres.add(book.book.genre));
  return Array.from(genres);
}

function countBooksAvailable() {
  const numBooks = books.value.length;
  return numBooks > 0 ? numBooks : 0;
}

const selectedBook = ref(null);

function showBookPopup(book) {
  selectedBook.value = book;
}

</script>

<template>
  <body>
    <div class="container">
      <header>
        <h4 id="navbar_title">Book repository</h4>
      </header>
      <main>
        <section>
          <div class="filters_container">
            <div id="info">
              <h2 v-show="countBooksAvailable() !== 0">Books availables: {{ countBooksAvailable() }}</h2>
              <h2 v-show="countBooksAvailable() === 0">No books availables</h2>
              <h4>
                Here you can find all the books avaliables in our repository.
                <br> You can add new books to your reading list , edit
                or delete them.
              </h4>
            </div>
            <div>
              <h4 id="selectedType" for="filtrar_genero">Search by type</h4>
              <select v-model="selectedType" @change="getFilteredBooks">
                <option value="all">All</option>
                <option v-for="genre in getGenres()" :key="genre" :value="genre">{{ genre }}</option>
              </select>
            </div>
          </div>
        </section>
        <article>
          <div id="main_grid">
            <div v-for="(book, index) in getBooks()" :key="book.book.title" class="book_item">
              <img :src="book.book.cover" alt="Book" style="width: 200px; height: 300px;"
                @click="showBookPopup(book.book)" />
            </div>
          </div>
        </article>
      </main>
      <aside>
        <h2>Reading list</h2>
        <div id="aside_grid">
          <div class="book_item">
            <img alt="Book" style="width: 100px; height: 140px;" />
          </div>
        </div>
      </aside>
    </div>
    <div v-if="selectedBook" class="modal">
      <div class="modal-content">
        <span class="close" @click="selectedBook = null">&times;</span>
        <img :src="selectedBook.cover" alt="Book" style="width: 200px; height: 280px;" />
      </div>
      <h4>{{ selectedBook.title }}</h4>
    </div>
  </body>
</template>
<style scoped>
.modal {
  /* Change this to none initially */
  padding: 1%;
  border-radius: 10px;
  position: fixed;
  background-color: rgba(69, 71, 63, 0.8);
}

.modal-content {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
  border-radius: 40px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

.close {
  color: #aaaaaa;
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
}

section {
  height: 120px;
  text-align: left;
  margin-left: 15px;
  margin-bottom: 30px;
}

.filters_container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#main_grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 10px;

}

#aside_grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
}

.book_item {
  padding: 3px;
}

h1,
h2,
h3,
h4,
p {
  color: white;
}

aside {
  margin-right: 30px;
  margin-top: 6%;
  background-color: #6e9987;
  border-radius: 40px;
  top: 0;
  right: 0;
  position: fixed;
  padding: 1%;
  height: 820px;
  width: 440px;
  overflow: auto;
}


main {
  position: fixed;
  margin-left: 20px;
  top: 115px;
  background-color: #6e9987;
  border-radius: 40px;
  padding: 1%;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

header {
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  font-size: calc(10px + 1vmin);
  background: #114d4d;
}

article {
  height: 35vw;
  overflow: auto;
}

#navbar_title {
  margin-left: 30px;
}
</style>
