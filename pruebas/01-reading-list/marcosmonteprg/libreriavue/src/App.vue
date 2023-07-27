<template>
  <v-app>   
    <FiltersBar/>
    <TotalsBar />
    <v-main>    
       <h1 v-if="name==='xs'">{{name}}</h1>  
      <v-row>   
         <v-col cols="0" sm="1" md="1"></v-col> 
         <v-col cols="6" sm="6" md="6"><BookList /> </v-col> 
         <v-col cols="6" sm="5" md="5"><ReadingList /> </v-col>           
      </v-row>    
    </v-main>
    <Futer />
  </v-app>
</template>

<script setup>
import FiltersBar  from "./components/FiltersBar.vue";
import TotalsBar   from "./components/TotalsBar.vue";
import BookList    from "./components/BookList.vue";
import ReadingList from "./components/ReadingList.vue";
import Futer       from "./components/Footer.vue";

import { library } from "./store/library";
const libraryStore = library();

if (!libraryStore.books.length) {    
     import("./data/books.json").then((module) => { 
       let dataJson = module.default;
       let arrBooks = dataJson.library.map((x) => { return { ...x.book, inReadingList: false, priority: "" }; });
       libraryStore.initialize(arrBooks);
     }
)}

let debounce = null;
window.addEventListener("storage", (event) => {
  if (event.key === "library") {
    clearTimeout(debounce);
    debounce = setTimeout(() => { libraryStore.updateFromLocalStorage(event.newValue); }, 50);
  }
});

</script>