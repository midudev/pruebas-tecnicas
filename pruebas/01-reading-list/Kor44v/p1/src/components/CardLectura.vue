<template>
<v-container>

  <v-row>
    <v-col v-for="book in lectura" :key="book.ISBN">
      <v-card
        class="mx-auto"
        width="200"
        height="auto"
      >
      
        <v-img :src="book.cover" height="300px"></v-img>

        <v-card-actions class="pa-0">
        <v-spacer></v-spacer>
        <v-btn icon @click="delete_lectura(book)" class="btn">
          <v-icon class="white--text">mdi-close</v-icon>
        </v-btn>
      </v-card-actions>
      </v-card>
    </v-col>
  </v-row>

</v-container>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "card-lectura-comp",
  created() {},
  data() {
    return {};
  },
  computed:{
    
  },
  props: {
    lectura:{
      type:Array,
      required:true
    },

  },
  methods: {
    ...mapActions(['delete_lectura'])
  },
};
</script>

<style scoped>
.btn{
  top: 0;
  right:0;
  position: absolute;
  background-color: transparent !important;
}


</style>
