<template>
  <div>
    <h1 class="white--text mx-5">Libros disponibles {{getLength}}</h1>
    <v-row>
      <v-col cols="3">
        <v-card flat color="transparent">
          <v-card-text>
            <v-row>
              <v-col class="pr-4">
                <v-slider
                  v-model="slider"
                  class="align-center"
                  :max="max"
                  :min="min"
                  step="20"
                  hide-details
                  dark
                >
                  <template v-slot:append>
                    <v-text-field
                      v-model="slider"
                      class="mt-0 pt-0"
                      hide-details
                      single-line
                      type="number"
                      style="width: 50px"
                      disabled
                    ></v-text-field>
                  </template>
                </v-slider>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <v-select v-model="selectedGenre"  :items="items" label="Géneros" dense dark></v-select>
      </v-col>
      <v-btn color="primary" @click="reset()">reset</v-btn>
    </v-row>
    <v-spacer></v-spacer>
    <v-row>
      <v-col cols="7">
        <Cards :data="filteredBooks" :selectedGenre="this.selectedGenre" />
      </v-col>
      <v-col cols="4" class="bg"> 
        <Lectura/>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters} from "vuex";
import Cards from "@/components/Cards.vue";
import Lectura from '@/components/Lectura.vue'

export default {
  name: "home-view",
  data() {
    return {
      min: 0,
      max: 1200,
      slider: 0,
      items: ['Fantasía','Terror','Ciencia ficción','Zombies'],
      // set:[],
      selectedGenre:''
    };
  },
  beforeCreate(){
    
    },
  created() {
    // this.setGenreFilter();
    this.getLibrary();
  },
  
  computed: {
    ...mapState(["library"]),
    ...mapGetters(['getLength']),
    filteredBooks() {
      if (!this.selectedGenre && this.slider == 0 ) {
        // Si no se ha seleccionado un género, mostrar todos los libros
        return this.library;
      } else {
        // Filtrar los libros según el género seleccionado
        let books = this.library;

        if (this.selectedGenre) {
          books = books.filter(book => book.book.genre === this.selectedGenre);
        }

        if (this.slider > 0) {
          books = books.filter(book => book.book.pages >= this.slider);
        }
        return books
      }
    },

  },
  methods: {
    ...mapActions(["getLibrary"]),
        reset(){
      this.selectedGenre = ''
      this.slider = 0
    }
    // setGenreFilter() {
    //   this.library.forEach((element) => {
    //     const genre = element.book.genre;
    //     this.items.push(genre);
    //   });
    //   let myset =  new Set(this.items)
    //   this.set = myset
    // },
    //FIXME: arreglar esta funcion porque no sirve del todo, necesita async await
  },

  components: {
    Cards,
    Lectura
  },
};
</script>
<style scoped>
.bg{
background: rgb(238,174,202);
background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(130,185,250,1) 47%, rgba(0,0,0,0.5181722347141982) 100%);}
</style>
