<template>
  <v-app-bar color="grey-lighten-2" density="compact" :elevation="0" >
    <h2 class="ml-3 hidden-xs">Total de libros : </h2>
    <v-spacer/>    
    <h4 class="mt-1 mr-10">Encontrados:   {{ libraryStore.qBookList }}</h4>
    <h4 class="mt-1 mr-10">Disponibles:   {{ libraryStore.qBookListAvailable }}</h4>
    <h4 class="mt-1 mr-10">Lista Lectura: {{ libraryStore.qReadingList }}</h4>     
  </v-app-bar>
</template>

<script setup>
import { library } from "../store/library";
const libraryStore = library();
</script>