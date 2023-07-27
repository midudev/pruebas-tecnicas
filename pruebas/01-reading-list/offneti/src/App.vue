<script setup lang="ts">
import booksData from '../books.json';
import { ref } from 'vue';

const selectedType = ref('all');
const books = ref(booksData['library']);
const readingList = ref<Book[]>([]);
const selectedBook = ref<Book | null>(null);
const alreadyInReadingList = ref(false);
const books_avaliables = ref<boolean>();
interface Book {
  cover: string;
  title: string;
  author: {
    name: string;
  };
  genre: string;
  year: number;
}

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

function showBookPopup(book: Book | null) {
  selectedBook.value = book;
}

function addToReadingList(cover: string, title: string) {
  //check if book is already in reading list
  for (let i = 0; i < readingList.value.length; i++) {
    if (readingList.value[i].title === title) {
      alreadyInReadingList.value = true;
      return
    }
  }
  const newBook: Book = {
    cover,
    title,
    author: { name: '' },
    genre: '',
    year: 0
  };
  // Add the new book to the reading list
  readingList.value.push(newBook);
  books_avaliables.value = true;
}

function deleteFromReadingList(title: string) {
  for (let i = 0; i < readingList.value.length; i++) {
    if (readingList.value[i].title === title) {
      readingList.value.splice(i, 1);
      break;
    }
  }
  if (readingList.value.length === 0) {
    books_avaliables.value = false;
  }
}

</script>

<template>
  <body>
    <div class="container">
      <header>
        <h4 id="navbar_title">Book repository</h4>
        <img id="logo"
          src="https://static.vecteezy.com/system/resources/previews/009/902/691/original/stack-of-colored-books-3d-render-png.png"
          alt="Book" style="width: 70px; height: 70px; margin-left:5px; margin-top:10px;" />
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
                <option v-for="genre in getGenres()" :value="genre">{{ genre }}</option>
              </select>
            </div>
          </div>
        </section>
        <article>
          <div id="main_grid">
            <div v-for="book in books" :key="book.book.title" class="book_item">
              <img class="have_hover" :src="book.book.cover" alt="Book" style="width: 180px; height: 280px;"
                @click="showBookPopup(book.book)" />
            </div>
          </div>
        </article>
      </main>
      <aside>
        <h2>Reading list</h2>
        <div id="aside_grid">
          <div v-show="readingList.length" v-for="book in readingList" :key="book.title" class="book_item">
            <img @click="deleteFromReadingList(book.title)" class="have_hover" :src="book.cover" alt="Book"
              style="width: 100px; height: 140px;" />
          </div>
        </div>
        <div v-show="!readingList.length">
          <h4>You are not reading any book :(</h4>
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
    <footer>
      <h6 style="color: rgb(68, 67, 67);">This is a technical test by midudev (Junior Level) | Developed
        by
        Aniol Nevado
        | Github
        user: offneti</h6>
    </footer>
  </body>
</template>
<style scoped>
footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
}

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

.have_hover:hover {
  transform: scale(1.05);
  cursor: pointer;
}

.have_hover {
  transition: transform .2s ease-in-out;
}

#logo:hover {
  transform: scale(1.3);
  transition: transform .4s ease-in-out;
}

.modal-content {
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  background-image: linear-gradient(to right, #577c6a, #366650, #3c9249);
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
  margin-right: 80px;
  margin-top: 6%;
  background-image: linear-gradient(to right, #3f6b56, #4a9c77, #445e48);
  border-radius: 40px;
  top: 0;
  right: 0;
  position: fixed;
  padding: 1%;
  height: 822px;
  width: 440px;
  overflow: auto;
  scale: 1;
}


main {
  position: fixed;
  margin-left: 80px;
  top: 114px;
  background-image: linear-gradient(to right, #2c463a, #42b883, #445e48);
  border-radius: 40px;
  padding: 1%;
  scale: 1;
}



header {
  display: flex;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  font-size: calc(10px + 1vmin);
  background-image: linear-gradient(to right, #2c463a, #42b883, #445e48);
}

article {
  height: 35vw;
  overflow-y: auto;
  position: sticky;
}

#navbar_title {
  margin-left: 30px;
}
</style>
