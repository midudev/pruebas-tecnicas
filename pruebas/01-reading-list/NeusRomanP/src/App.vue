<script setup>
  import { onBeforeMount, onMounted, ref, watch } from 'vue';
  import booksData from './assets/books.json'
  import ReadingList from './components/ReadingList.vue';
  import FilterForm from './components/FilterForm.vue';
  import BookList from './components/BookList.vue';
  const books = ref(booksData.library);
  const booksCount = ref(books.value.length);
  const readingBooks = ref([]);
  const pagesNum = ref(1500);
  const genres = Array.from(new Set(booksData.library.map((book) => {
    return book.book.genre;
  })));

  const currentGenre = ref('Todos');

  const draggedBook = ref(null);
  let scrollableBoxPosition = null;

  const handleDragStartOnMobile = (e, index) => {
    e.preventDefault();
    draggedBook.value = index;
  }

  const handleDragStart = (index) => {
    draggedBook.value = index;
  }

  const handleDragOnMobile = (e) => {
    e.preventDefault();

    let touchLocation = e.targetTouches[0];

    const scrollableBox = document.getElementById('reading-books-scroll');

    scrollableBoxPosition = scrollableBox.getBoundingClientRect();

    if (touchLocation.pageX < scrollableBoxPosition.left) {
      scrollableBox.scrollLeft -= 4;
    } else if (touchLocation.pageX > scrollableBoxPosition.right) {
      scrollableBox.scrollLeft += 4;
    }

    e.currentTarget.style.position = 'absolute';
    e.currentTarget.style.left = touchLocation.pageX + 'px';
    e.currentTarget.style.top = touchLocation.pageY + 'px';

  }

  const handleDragEndOnMobile = (e) => {
    const targetPos = e.currentTarget.getBoundingClientRect();
    const targetPosTop = targetPos.top;
    const targetPosBottom = targetPos.bottom;

    if (targetPosTop > scrollableBoxPosition.bottom || targetPosBottom < scrollableBoxPosition.top) {
      e.currentTarget.style.position = 'static';
    } else {
      const middle = scrollableBoxPosition.top + ((scrollableBoxPosition.bottom - scrollableBoxPosition.top) / 2)
      let element = document.elementsFromPoint(targetPos.left, middle)[3];
      let element3 = document.elementsFromPoint(targetPos.left + 20, middle)[3];

      if (element?.getAttribute('index')) {
        handleDrop(parseInt(element.getAttribute('index')));
      } else if (element3?.getAttribute('index')) {
        if (element3?.getAttribute('index') < e.currentTarget.getAttribute('index')) {
          handleDrop(parseInt(element3.getAttribute('index')));
        } else {
          element3 = document.elementsFromPoint(targetPos.left - 20, middle)[1];
          handleDrop(parseInt(element3.getAttribute('index')));
        }
      }
    }
    e.currentTarget.style.position = 'static';
  }

  const handleDragOver = (e) => {
    e.preventDefault();
  }

  const handleDragEnd = () => {
    draggedBook.value = null;
  }

  const handleDrop = (index) => {
    const droppedBook = readingBooks.value.splice(draggedBook.value, 1)[0];
    readingBooks.value.splice(index, 0, droppedBook);
    draggedBook.value = null;
  }

  const removeFromReadingBooks = (id) => {

    readingBooks.value = readingBooks.value.filter((book) => {
      return book[0].book.ISBN !== id;
    });

    booksCount.value = books.value.length - readingBooks.value.length;
  }
 

  onBeforeMount(() => {
    readingBooks.value = JSON.parse(localStorage.getItem('reading-books')) ?? readingBooks.value;
    booksCount.value = books.value.length - readingBooks.value.length;


  });

  onMounted(() => {
    pagesNum.value = parseInt(document.getElementById('pages').value);
  });

  const filterByName = (e) => {
    const name = document.getElementById('name').value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    if(e){
      filterByGenre();
      filterByPages();
    }

    books.value = books.value.filter((book)=> {
      return book.book.title.toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .includes(name);
    })

  }

  const getNewCounter = () => {

    let filteredBooksISBN = books.value.map((book) => {
      return book.book.ISBN;
    })

    let readingBooksFiltered = readingBooks.value.filter((book) => {
      if (!filteredBooksISBN.includes(book[0].book.ISBN)) return false;
      return ((book[0].book.genre === currentGenre.value || currentGenre.value === 'Todos') &&
        book[0].book.title.toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .includes(name));
    })
    
    return books.value.length - readingBooksFiltered.length;
  }

  const filterByPages = (e) => {
    pagesNum.value = parseInt(document.getElementById('pages').value);

    if(e){
      filterByGenre();
    }
    
    books.value = books.value.filter((book) => {
      return book.book.pages <= pagesNum.value;
    });
  }

  const filterByGenre = (e) => {
    currentGenre.value = document.getElementById('genre').value;

    if (currentGenre.value === 'Todos') {
      books.value = booksData.library;
    }else{
      books.value = booksData.library.filter((book) => {
        return book.book.genre === currentGenre.value;
      })
    }

    if(e){
      filterByName();
      filterByPages();
    }
  }

  const addToReadingBooks = (id) => {
    let bookToAdd = books.value.filter((book) => {
      return book.book.ISBN === id;
    });

    readingBooks.value.push(bookToAdd);

    booksCount.value = books.value.length - readingBooks.value.length;

    booksCount.value = getNewCounter();
  }

  watch(readingBooks, (newVal) =>{
    localStorage.setItem('reading-books', JSON.stringify(newVal));

    booksCount.value = getNewCounter();
  }, {deep:true});

  watch(books, () =>{
    booksCount.value = getNewCounter();
  }, {deep:true});

  watch(currentGenre, () =>{
    booksCount.value = getNewCounter();
    
  }, {deep:true});

  watch(pagesNum, () => {
    booksCount.value = getNewCounter();
  });

  window.addEventListener('storage', () =>{
    readingBooks.value = JSON.parse(localStorage.getItem('reading-books')) ?? readingBooks.value;
  });
</script>

<template>
  <header class="top-header">
    <h1 class="main-title">
      ¡Alquila los mejores libros!
    </h1>
    <img 
      class="logo"
      src="./assets/book-list-white.webp" 
      alt="Book list logo"
    >
  </header>
  <div class="books-wrapper">
    <main class="main">
      <header class="header">
        <FilterForm
          :genres="genres"
          :pages-num="pagesNum"
          @filter-by-genre="filterByGenre"
          @filter-by-name="filterByName"
          @filter-by-pages="filterByPages"
        />
        <h2> {{ booksCount }} libros disponibles</h2>
        <h3>{{ readingBooks.length }} libros en la lista de lectura</h3>
      </header>
      <section class="available-books">
        <BookList 
          :books="books"
          :reading-books="readingBooks"
          @add-to-reading-books="addToReadingBooks"
        />
      </section>
    </main>
    <div class="aside-wrapper">
      <aside class="aside">
        <div>
          <h2>Lista de lectura</h2>
          <ReadingList 
            :reading-books="readingBooks"
            :books="books"
            :books-count="booksCount"
            @handle-drag-start-on-mobile="handleDragStartOnMobile"
            @handle-drag-on-mobile="handleDragOnMobile"
            @handle-drag-end-on-mobile="handleDragEndOnMobile"
            @handle-drag-start="handleDragStart"
            @handle-drag-over="handleDragOver"
            @handle-drag-end="handleDragEnd"
            @handle-drop="handleDrop"
            @remove-from-reading-books="removeFromReadingBooks"
          />
        </div>
      </aside>
    </div>
  </div>
</template>

<style scoped>

</style>
