<template>
    <h3 class="mt-2 ml-1">Lista de Libros:</h3>
    <transition name="fade">
      <h4 v-if="libraryStore.qBookList == 0" class="mt-2 ml-1">No hay libros para los filtros seleccionados.</h4>
    </transition>  
    <v-sheet class="d-flex flex-wrap">
      <v-sheet v-for="x in libraryStore.bookList" :key="x" class="ma-2 pa-2">
        <v-hover v-slot="{ isHovering, props }">
          <v-card width="185" height="270" :elevation="isHovering ? 8 : 1" v-bind="props" >
            <v-container>
              <v-img :class="x.inReadingList == true ? 'byn' : ''" width="300" height="190" :src="x.cover" contain> </v-img>
              <h5 class="text-center text-truncate">{{ x.genre + " (" + x.pages + " pg.)" }}</h5>
              <v-row class="justify-center mt-1">
                <v-btn @click=" x.inReadingList ? libraryStore.changeBookState(x.ISBN) : showDialog(x)" variant="text" color="brown-darken-4">
                  {{ x.inReadingList ? "QUITAR" : "AGREGAR" }}
                </v-btn>
              </v-row>
            </v-container>
          </v-card>
        </v-hover>
      </v-sheet>      
    </v-sheet>
  
    <v-dialog v-model="dialog" max-width="350px" persistent>
          <v-card>  
            <v-card-title>
              <span class="headline">Agregar a Lista de Lectura.</span>
            </v-card-title> 
                <v-select 
                  class="mt-3 ml-10 mr-10"
                  v-model="priority"               
                  :items="priorities"
                  item-title="des" 
                  item-value="id"                        
                  label="Prioridad"
                  variant="underlined"
                  density="compact"
                ></v-select>                    
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color='brown-darken-4' variant="text" @click="dialog=false">Cancelar</v-btn>
              <v-btn color='brown-darken-4' variant="text" @click="addToList">Aceptar</v-btn>
            </v-card-actions>
          </v-card>
    </v-dialog>
</template>


<script setup>
  import { library } from "../store/library";  
  const libraryStore = library();

  import {ref} from 'vue'
  let dialog = ref(false);
  let selectedBook = ref(null)
  let priority = ref("")
  let priorities = ref([ {id: "1-Alta" ,des:"Alta"}, {id:"2-Media",des:"Media"}, {id:"3-Baja",des:"Baja"}])

  const showDialog = (book) => {
    priority.value ="1-Alta"
    selectedBook.value = book;     
    dialog.value = true;
  };

  const addToList = () => {   
    libraryStore.changeBookState(selectedBook.value.ISBN,priority.value)  
    dialog.value = false;
    document.main.scrollTop = 0;    
  };

</script>