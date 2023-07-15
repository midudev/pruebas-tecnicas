<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <nav class="font-sans text-3xl text-gray-400">
      good<span class="text-green-400">reads</span>
    </nav>
    <section class="min-h-screen mx-auto">
      <div class="flex flex-col mx-10 py-8 sm:w-72">
        <!-- Filtro por Genero -->
        <select
          name=""
          id=""
          class="block py-2.5 px-2 bg-[#f9f3ee] text-md border-0 border-b-2 border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200"
          v-model="gender"
        >
          <option value="null">Selecciona Genero</option>
          <option value="Fantasía">Fantasía</option>
          <option value="Ciencia ficción">Ciencia ficción</option>
          <option value="Zombies">Zombies</option>
          <option value="Terror">Terror</option>
        </select>
      </div>

      <div
        :class="[readingList.library.length == 0 ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4']"
        class="grid gap-4 my-4 mx-10"
      >
        <div
          :class="[readingList.library.length == 0 ? '' : 'md:col-span-2 lg:col-span-3']"
          class="bg-[#f9f3ee] rounded-lg grid p-4 h-min gap-4 w-full"
        >
          <div
            :class="[
              readingList.library.length == 0
                ? 'col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 '
                : 'col-span-1 md:col-span-2 lg:col-span-3',
            ]"
            class="text-2xl font-mono"
          >
            <h1 class="text-center">Libros</h1>
            <h4>Cantidad de Libros: {{ filtro.library.length }}</h4>
          </div>
          <div v-for="(item, index) in filtro.library" :key="index">
            <div
              @click="
                moverItem(item.book.title, this.listBooks, this.readingList)
              "
              class="bg-white flex gap-4 rounded-lg overflow-hidden py-6 px-2 h-72"
            >
              <div  :class="[readingList.library.length == 0 ? 'w-[50%]' : 'w-full']" class=" h-full overflow-hidden">
                <img
                  class="w-full h-full transition-all hover:scale-125 duration-[1900ms]"
                  :src="item.book.cover"
                  alt="cover"
                />
              </div>
              <div :class="[readingList.library.length == 0 ? 'block' : 'hidden']" class="flex justify-evenly flex-col w-[50%]">
                <h3>{{ item.book.title }}</h3>
                <h4>{{ item.book.author.name }}</h4>
                {{ item.book.synopsis }}
              </div>
            </div>
          </div>
        </div>
        <div
          v-if="readingList.library.length != 0"
          class="col-span-1 lg:col-span-1 xl:col-span-1 bg-[#f9f3ee] h-min rounded-lg p-4"
        >
          <h1 class="text-center text-2xl font-mono">Reading List</h1>
          <h4 class="text-2xl font-mono pb-2">
            Cantidad de Libros: {{ readingList.library.length }}
          </h4>
          <div v-for="(item, index) in readingList.library" :key="index">
            <div
              @click="
                moverItem(item.book.title, this.readingList, this.listBooks)
              "
              class="bg-white flex gap-4 rounded-lg overflow-hidden p-6 h-72 my-2 justify-center"
            >
              <img :src="item.book.cover" alt="cover" class="" />
              <!-- <div class="flex justify-evenly flex-col">
                <h3>{{ item.book.title }}</h3>
                <h4>{{ item.book.author.name }}</h4>
                {{ item.synopsis }}
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <!-- <div class="flex w-full items-center justify-center bg-green-300">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <!--   <HelloWorld msg="Vite + Vue" /> -->
</template>

<script>
import jsonData from "../src/assets/books.json";

export default {
  data() {
    return {
      gender: "null",
      listBooks: jsonData,
      readingList: {
        library: [],
      },
    };
  },
  created() {
    if (
      localStorage.getItem("init") !== null ||
      localStorage.getItem("init") !== ""
    ) {
      if (JSON.parse(localStorage.getItem("init")) !== null) {
        this.listBooks = JSON.parse(localStorage.getItem("init"));
      }
    }

    if (
      localStorage.getItem("reading") !== null ||
      localStorage.getItem("reading") !== ""
    ) {
      if (JSON.parse(localStorage.getItem("reading")) !== null) {
        this.readingList = JSON.parse(localStorage.getItem("reading"));
        console.log(this.readingList);
      }
    }
  },
  mounted() {
    window.addEventListener("storage", this.actualizar);
  },
  computed: {
    filtro() {
      if (this.gender != "null") {
        const items = this.listBooks.library.filter(
          (item) => item.book.genre === this.gender
        );
        return {
          library: items,
        };
      } else {
        return {
          library: this.listBooks.library,
        };
      }
    },
  },
  methods: {
    moverItem(title, origen, destino) {
      const itemIndex = origen.library.findIndex((item) => {
        return item.book.title === title;
      });

      if (itemIndex !== -1) {
        const item = origen.library.splice(itemIndex, 1)[0];
        destino.library.push(item);
      }

      localStorage.setItem("init", JSON.stringify(this.listBooks));
      localStorage.setItem("reading", JSON.stringify(this.readingList));
    },
    actualizar(event) {
      if (event.key == "init") {
        this.listBooks = JSON.parse(event.newValue);
      } else if (event.key == "reading") {
        this.readingList = JSON.parse(event.newValue);
      }
    },
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
