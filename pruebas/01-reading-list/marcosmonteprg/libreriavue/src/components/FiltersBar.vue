<template>

  <v-app-bar color="blue-grey-lighten-1" density="compact" :elevation="0" v-if="name==='xs'" >
     <h1 class="ml-3 mt-4">Librería</h1> 
  </v-app-bar>

  <v-app-bar color="blue-grey-lighten-1" height="75" :elevation="0">
    <v-row class="mt-4">

      <v-col md="3" class="hidden-xs">
        <h1 class="ml-3">Librería</h1>
      </v-col>

      <v-col cols="4" sm="3" md="3">
        <v-text-field
          class="ml-2"
          v-model="libraryStore.filters.title"
          label="Título"
          density="compact"
        ></v-text-field>
      </v-col>

      <v-col cols="4" sm="3" md="3">
        <v-select
          v-model="libraryStore.filters.genre"
          :items="libraryStore.genres"
          label="Género"
          density="compact"
        ></v-select>
      </v-col>

      <v-col md="3" class="hidden-sm-and-down">
       <v-slider
          class="mt-4 mr-10 "
          v-model="libraryStore.filters.pages"
          color="grey-lighten-2"
          label="Páginas"
          :min="libraryStore.minPages"
          :max="libraryStore.maxPages"
          :step="1"
          thumb-label="always"
        ></v-slider>
      </v-col>

     <v-col xs="4" class="hidden-md-and-up mr-2">
        <v-text-field          
          v-model="libraryStore.filters.pages"
          label="Páginas"        
          type="number"
          density="compact"
       ></v-text-field>
      </v-col>
      
    </v-row>
  </v-app-bar>
  
</template>

<script setup>
import { library } from "../store/library";
const libraryStore = library();

import { useDisplay } from 'vuetify'
const { name } = useDisplay()

</script>