<script setup lang="ts">
import { BookListPloc } from "@/core/book/presentation/BookListPloc"
import { BooksPloc } from "@/core/book/presentation/BooksPloc"
import { BooksState } from "@/core/book/presentation/BooksState"
import { inject, onMounted, ref } from "vue"
import { usePlocState } from "@/ui/common/usePlocState"
import { BookListState } from "@/core/book/presentation/BookListState"
import { Book } from "@/core/book/domain/Book"

const booksPloc = inject<BooksPloc>("booksPloc") as BooksPloc
const booksState = usePlocState<BooksState>(booksPloc)
const selectedGenre = ref<string>("")
function loadBooks() {
  booksPloc.search(selectedGenre.value)
}

const bookListPloc = inject<BookListPloc>("bookListPloc") as BookListPloc
const bookListState = usePlocState<BookListState>(bookListPloc)
function loadBookList() {
  bookListPloc.get()
}
function addBookToList(book: Book) {
  bookListPloc.addBook(book)
  window.dispatchEvent(new Event("storage"))
}
function removeBookFromList(book: Book) {
  bookListPloc.removeBook(book.ISBN)
  window.dispatchEvent(new Event("storage"))
}

onMounted(() => {
  loadBooks()
  loadBookList()
})
</script>

<template>
  <header>
    <h1>Book Depository</h1>
  </header>

  <main class="library">
    <section class="library__filters">
      <label class="filters__label" for="bookGenre">Género</label>
      <input
        id="bookGenre"
        v-model="selectedGenre"
        class="filters__input"
        name="book-genre"
        list="bookGenres"
        placeholder="Fantasía, ciencia ficción..."
        @input="loadBooks"
      />
      <datalist id="bookGenres">
        <option v-for="genre in booksPloc.allGenres" :key="genre" :value="genre"></option>
      </datalist>
    </section>

    <section v-if="booksState.kind === 'LoadingBooksState'" class="library__loading">
      <span>Cargando...</span>
    </section>

    <section v-if="booksState.kind === 'ErrorBooksState'" class="library__error">
      <p>{{ booksState.error }}</p>
    </section>

    <section v-if="booksState.kind === 'LoadedBooksState'" class="library__books">
      <article
        v-for="book in booksState.books"
        :key="book.ISBN"
        :class="[
          'books__book',
          {
            'books__book--bookmark':
              bookListState.kind !== 'LoadedBookListState'
                ? false
                : bookListState.books.map((book) => book.ISBN).includes(book.ISBN),
          },
        ]"
        @click="addBookToList(book)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="book__bookmark">
          <path
            fill-rule="evenodd"
            d="M6.32 2.577a49.255 49.255 0 0111.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 01-1.085.67L12 18.089l-7.165 3.583A.75.75 0 013.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93z"
            clip-rule="evenodd"
          />
        </svg>
        <img
          loading="lazy"
          :src="book.cover"
          :alt="book.title"
          :title="book.title"
          width="200"
          height="300"
        />
        <div class="book__info">
          <p class="book__book-title" :title="book.title">
            {{ book.title.length > 22 ? book.title.slice(0, 22) + "..." : book.title }}
          </p>
          <p class="book__book-author" :title="book.author.name">{{ book.author.name }}</p>
        </div>
      </article>
    </section>

    <section class="library__book-list">
      <h2 class="book-list__title">Lista de lectura:</h2>
      <article
        v-if="bookListState.kind === 'LoadedBookListState' && bookListState.books.length > 0"
        class="book-list__books"
      >
        <div v-for="book in bookListState.books" :key="book.ISBN" class="books__book">
          <img :src="book.cover" :alt="book.title" :title="book.title" width="50" height="80" />
          <div class="book__info">
            <p class="book__title">
              {{ book.title.length > 20 ? book.title.slice(0, 20) + "..." : book.title }}
            </p>
            <p class="book__author">{{ book.author.name }}</p>
          </div>
          <div class="book__actions">
            <button class="book-action__remove" @click="removeBookFromList(book)">Borrar</button>
          </div>
        </div>
      </article>
      <article
        v-if="bookListState.kind === 'LoadedBookListState' && bookListState.books.length === 0"
        class="book-list__books--empty"
      >
        <p><i>Añade libros a la lista para verlos aquí</i></p>
      </article>
    </section>
  </main>
</template>

<style scoped>
header {
  text-align: start;
  flex: 0 0 100%;
}
header h1 {
  margin: 0;
}
.library {
  flex: 0 0 100%;
  display: flex;
  flex-flow: row wrap;
}
/* #region Filters */
.library .library__filters {
  flex: 0 0 100%;
  text-align: start;
  margin-bottom: 1.5rem;
}
.library__filters .filters__label {
  display: block;
  font-size: 0.9em;
}
.library__filters .filters__label:first-of-type {
  margin: 1.3rem 0 0.3rem;
}
.library__filters .filters__input {
  box-sizing: border-box;
  width: 200px;
  height: 40px;
  border: 1px solid #c0c0c0;
  border-radius: 6px;
  padding: 5px 10px;
}
.library__filters .filters__input:hover,
.library__filters .filters__input:focus-visible {
  outline: 0;
  border-color: #383837;
}
/* #endregion */

/* #region Books */
.library .library__loading,
.library .library__books {
  flex: 0 0 70%;
}
.library .library__error {
  text-align: start;
  background-color: #ff5353;
  padding: 0 2rem;
  width: fit-content;
  border-radius: 6px;
}
.library__error p {
  color: white;
  font-weight: 500;
}
.library .library__error + .library__book-list {
  display: none;
}
.library .library__books {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  place-items: start;
  gap: 1rem;
  margin-right: 2rem;
}
.library__books .books__book {
  border: 1px solid #c0c0c0;
  border-radius: 6px;
  position: relative;
}
.library__books .books__book:hover {
  border-color: #383837;
  cursor: pointer;
}
.library__books .books__book--bookmark {
  pointer-events: none;
}
.library__books .books__book .book__bookmark {
  width: 32px;
  height: 0;
  position: absolute;
  top: -3%;
  left: 83%;
  transform: translateY(-10%);
  fill: #ff5353;
  transition: all 0.2s ease;
  opacity: 0;
}
.library__books .books__book--bookmark .book__bookmark {
  width: 32px;
  height: 32px;
  opacity: 1;
  transition: all 0.2s ease;
}
.library__books .books__book img {
  border-radius: 5px 5px 0 0;
}
.library__books .books__book .book__info {
  margin-bottom: 8px;
}
.library__books .books__book .book__info p {
  width: 200px;
  margin: 2px 0;
  text-align: center;
}
/* #endregion */

/* #region BookList */
.library .library__book-list {
  flex: 0 0 calc(30% - 2rem);
  text-align: start;
}
.library__book-list .book-list__title {
  margin-top: 0;
  position: sticky;
  top: 5vh;
}
.library__book-list .book-list__books,
.library__book-list .book-list__books--empty {
  border: 1px solid #c0c0c0;
  border-radius: 6px;
  box-sizing: border-box;
  padding: 0.75rem;
  position: sticky;
  top: 11vh;
  max-height: 84vh;
  overflow: auto;
}
.library__book-list .book-list__books {
  padding-right: 0;
}
.book-list__books--empty p {
  margin: 0;
}
.book-list__books .books__book {
  margin-bottom: 0.75rem;
  display: flex;
  gap: 0 0.5rem;
  border-block: 1px solid transparent;
}
.book-list__books .books__book:last-of-type {
  margin-bottom: 0;
}
.book-list__books .books__book img {
  border-radius: 6px;
  pointer-events: none;
}
.book-list__books .books__book .book__info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 200px;
  margin-right: auto;
  pointer-events: none;
}
.book-list__books .book__info p {
  margin: 0;
  pointer-events: none;
}
.books__book .book__actions {
  align-self: center;
  overflow: hidden;
  padding-right: 0.75rem;
}
.book__actions .book-action__remove {
  border: 0;
  background-color: whitesmoke;
  padding: 5px 10px;
  border-radius: 6px;
  color: #ff5353;
  display: none;
}
.book-list__books .books__book:hover .book-action__remove {
  display: block;
  cursor: pointer;
  border: 1px solid #ff5353;
}
.book-list__books .books__book:hover .book-action__remove:active {
  background-color: #ff5353;
  color: whitesmoke;
}

@media screen and (max-width: 1200px) {
  .library .library__books {
    margin-right: 1rem;
    flex: auto;
  }
  .library .library__book-list {
    min-width: 320px;
    flex: 0;
  }
}
@media screen and (max-width: 605px) {
  header {
    text-align: center;
  }
  main.library {
    overflow-x: hidden;
    position: relative;
  }
  .library .library__filters input {
    width: 100%;
  }
  .library .library__books {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 1.5rem;
  }
  .library .library__book-list {
    flex: auto;
    margin-top: 2rem;
  }
}
/* #endregion */
</style>
