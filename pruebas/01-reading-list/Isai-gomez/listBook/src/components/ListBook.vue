<template>
  <div class="container-img" v-for="{ book } in datajson" :key="book.ISBN">
    <div class="wrapper-img-btn">

        <img :src="book.cover" :alt="book.title" />
        <button>Añadir a lista de lectura</button>
    </div>
  </div>
</template>
<script>
import data from "../../../../books.json";
import { ref } from "vue";
export default {
  name: "ListBook",
  setup() {
    const datajson = ref(data.library);
    return {
      datajson,
    };
  },
};
</script>
<style scoped>
img {
  border-radius: 10px;
  width: 100%;
  height: auto;
  box-shadow: 0px 0px 30px #0000;
  
}
.container-img {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
  
}
.wrapper-img-btn{
    display: grid;
    place-content: center;
    grid-template-rows: repeat(min(150px), minmax(150px, 1fr));
    gap: 1rem;
}
button{
    background-color: darkslategray;
    height: 3rem;
    width: 15rem;
    color: white;
border-style: none;
}
</style>
