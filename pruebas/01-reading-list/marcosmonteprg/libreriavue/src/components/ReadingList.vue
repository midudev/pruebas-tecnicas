<template>
  <h3 class="mt-2 ml-1">Lista de Lectura:</h3>
  <transition name="fade">
    <h4 v-if="libraryStore.qReadingList == 0" class="mt-2 ml-1">No hay libros en la lista de lectura.</h4>
  </transition>
  <v-sheet class="d-flex flex-wrap">
    <v-sheet v-for="x in libraryStore.readingList" :key="x" class="ma-2 pa-2">
      <v-hover v-slot="{ isHovering, props }"> 
      <v-slide-y-transition  group>
        <v-card width="185" height="270" :elevation="isHovering ? 8 : 1" v-bind="props">
          <v-container>
            <v-img height="190" contain :src="x.cover"></v-img>
            <h5 class="text-center">Prioridad: {{ x.priority.slice(2) }}</h5>
            <v-row class="justify-center mt-1">
              <v-btn @click="libraryStore.changeBookState(x.ISBN)" variant="text" color="brown-darken-4">Quitar</v-btn>
            </v-row>
          </v-container>
        </v-card> 
      </v-slide-y-transition>
      </v-hover>
    </v-sheet>
  </v-sheet>
</template>

<script setup>
import { library } from "../store/library";
const libraryStore = library();
</script>

