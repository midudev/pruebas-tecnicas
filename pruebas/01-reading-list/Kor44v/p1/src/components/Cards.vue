<template>
  <div>
    <v-row>
      <v-col v-for="(books, i) in data" :key="i">
        <div v-for="(book, i) in books" :key="i">
          <v-card class="mx-auto hover " width="200" height="auto" @click="add_lectura(book)">
            <v-img :src="book.cover" height="300px" ></v-img>
            <!-- <div class="pa-2 ">
              <v-card-title>
                {{ book.title }}
              </v-card-title>

              <v-card-subtitle>
                {{ book.genre }}
              </v-card-subtitle>
            </div> -->
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "cards-comp",
  created() {},
  data() {
    return {
      show: false,
    };
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
  methods: {
    ...mapActions(['add_lectura'])
  },
};
</script>

<style scoped>
.hover{
    transition: transform 0.3s ease-in-out;

}
.hover:hover{
  transform: scale(1.1);
  transition: linear all 10ms;
  transition: transform 0.3s ease-in-out;

}

</style>
