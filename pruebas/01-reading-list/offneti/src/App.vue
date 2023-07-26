<script setup lang="ts">
import booksData from './books.json';
import { ref } from 'vue';

const selectedType = ref('all');
const books = ref(booksData['library']);
const readingList = ref([]);
const selectedBook = ref(null);
const alreadyInReadingList = ref(false);

function getFilteredBooks() {
  if (selectedType.value === 'all') {
    books.value = booksData['library'];
    return
  }
  books.value = booksData['library'].filter(book => book.book.genre === selectedType.value);
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

function showBookPopup(book) {
  selectedBook.value = book;
}

function addToReadingList(cover, title) {
  //check if book is already in reading list
  for (let i = 0; i < readingList.value.length; i++) {
    if (readingList.value[i].title === title) {
      alreadyInReadingList.value = true;
      return
    }
  }
  readingList.value.push({ cover, title });
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
                <br> You can add new books to your reading list and delete them.
              </h4>
            </div>
            <div id="filters">
              <h4 id="selectedType" for="filtrar_genero">Search by genre</h4>
              <select id="select_gender" v-model="selectedType" @change="getFilteredBooks">
                <option value="all">All</option>
                <option v-for="genre in getGenres()" :key="genre" :value="genre">{{ genre }}</option>
              </select>
            </div>
          </div>
        </section>
        <article>
          <div id="main_grid">
            <div v-for="(book, index) in books" :key="book.book.title" class="book_item">
              <img :src="book.book.cover" alt="Book" style="width: 200px; height: 300px;"
                @click="showBookPopup(book.book)" />
            </div>
          </div>
        </article>
      </main>
      <aside>
        <h2>Reading list</h2>
        <div id="aside_grid">
          <div v-for="(book, index) in readingList" :key="book.title" class="book_item">
            <img :src="book.cover" alt="Book" style="width: 100px; height: 140px;" />
          </div>
        </div>
      </aside>
    </div>
    <div v-if="selectedBook" class="modal">
      <div id="modal-backdrop"></div>
      <div class="modal-content">
        <div>
          <span class="close" @click="selectedBook = null">&times;</span>
          <img :src="selectedBook.cover" alt="Book" style="width: 200px; height: 280px;" />
        </div>
        <div id="book_info">
          <h2 style="margin:20px;">{{ selectedBook.title }}</h2>
          <h4 style="margin:20px;">Author: {{ selectedBook.author.name }}</h4>
          <h4 style="margin:20px;">Genre: {{ selectedBook.genre }}</h4>
          <h4 style="margin:20px;">Year: {{ selectedBook.year }}</h4>
          <button @click="addToReadingList(selectedBook.cover, selectedBook.title), selectedBook = null" id="add_book"
            style="margin:20px;">Add
            to reading
            list</button>
        </div>
      </div>
    </div>
    <div v-show="alreadyInReadingList" class="modal_already_on_list">
      <div id="modal-backdrop"></div>
      <div class="modal-content-error">
        <div id="error">
          <span class="close_error" @click="alreadyInReadingList = false">&times;</span>
          <h4 style="margin:20px;">Already on list</h4>
        </div>
      </div>
    </div>
  </body>
</template>
<style scoped>
#modal-backdrop {
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0);
  background-color: rgba(69, 71, 63, 0.8);
}

#book_info {
  display: inline-block;
  text-align: left;
}

#error {
  display: inline-block;
  text-align: left;
}

#select_gender {
  border-radius: 10px;
  scale: 1.2;
}

#filters {
  display: inline-block;
  margin-right: 20px;
}

.modal {
  top: 0;
  left: 0;
  position: fixed;
}

.modal_already_on_list {
  top: 0;
  left: 0;
  position: fixed;
}

.modal-content-error {
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 4%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #cf5959;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  width: 200px;
  height: 50px;
}


.modal-content {
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-color: #6e9987;
  border-radius: 20px;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
}

.close {
  color: #fdfdfd;
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
}

.close_error {
  color: #fdfdfd;
  position: absolute;
  top: 0;
  right: 10px;
  font-size: 15px;
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
