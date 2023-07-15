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
        :class="[
          readingList.library.length == 0
            ? 'grid-cols-1'
            : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
        ]"
        class="grid gap-4 my-4 mx-10"
      >
        <div
          :class="[
            readingList.library.length == 0
              ? ''
              : 'md:col-span-2 lg:col-span-3',
          ]"
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
            <!-- new -->
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
              <div
                :class="[
                  readingList.library.length == 0 ? 'w-[50%]' : 'w-full',
                ]"
                class="h-full overflow-hidden"
              >
                <img
                  class="w-full h-full transition-all hover:scale-125 duration-[1900ms]"
                  :src="item.book.cover"
                  alt="cover"
                />
              </div>
              <div
                :class="[readingList.library.length == 0 ? 'block' : 'hidden']"
                class="flex justify-evenly flex-col w-[50%]"
              >
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
</template>

<script>
import jsonData from "../src/assets/books.json";

export default {
  data() {
    return {
      gender: "null",
      listBooks: {
        library: [
          {
            book: {
              title: "El Señor de los Anillos",
              pages: 1200,
              genre: "Fantasía",
              cover:
                "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
              synopsis:
                "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
              year: 1954,
              ISBN: "978-0618640157",
              author: {
                name: "J.R.R. Tolkien",
                otherBooks: ["El Hobbit", "El Silmarillion"],
              },
            },
          },
          {
            book: {
              title: "Juego de Tronos",
              pages: 694,
              genre: "Fantasía",
              cover:
                "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1273763400i/8189620.jpg",
              synopsis:
                "En un reino donde las estaciones duran años, una batalla épica por el trono se desarrolla.",
              year: 1996,
              ISBN: "978-0553103540",
              author: {
                name: "George R. R. Martin",
                otherBooks: [
                  "Choque de Reyes",
                  "Tormenta de Espadas",
                  "Festín de Cuervos",
                ],
              },
            },
          },
          {
            book: {
              title: "Harry Potter y la piedra filosofal",
              pages: 223,
              genre: "Fantasía",
              cover:
                "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1550337333i/15868.jpg",
              synopsis:
                "Un niño descubre que es un mago y comienza una aventura en una escuela de magia.",
              year: 1997,
              ISBN: "978-0747532699",
              author: {
                name: "J.K. Rowling",
                otherBooks: [
                  "Harry Potter y la cámara secreta",
                  "Harry Potter y el prisionero de Azkaban",
                  "Harry Potter y el cáliz de fuego",
                ],
              },
            },
          },
          {
            book: {
              title: "1984",
              pages: 328,
              genre: "Ciencia ficción",
              cover:
                "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1657781256i/61439040.jpg",
              synopsis:
                "Una inquietante visión de un futuro distópico y totalitario.",
              year: 1949,
              ISBN: "978-0451524935",
              author: {
                name: "George Orwell",
                otherBooks: ["Rebelión en la granja"],
              },
            },
          },
          {
            book: {
              title: "Apocalipsis Zombie",
              pages: 444,
              genre: "Zombies",
              cover:
                "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1422626176i/24762432.jpg",
              synopsis:
                "Un gallego se queda en casa en pleno apocalipsis zombie y acaba casi salvando el mundo",
              year: 2001,
              ISBN: "978-4444532611",
              author: {
                name: "Manel Loreiro",
                otherBooks: [],
              },
            },
          },
          {
            book: {
              title: "Dune",
              pages: 412,
              genre: "Ciencia ficción",
              cover:
                "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1555447414i/44767458.jpg",
              synopsis:
                "En el inhóspito planeta desértico de Arrakis, una gran intriga política y familiar se desarrolla.",
              year: 1965,
              ISBN: "978-0441172719",
              author: {
                name: "Frank Herbert",
                otherBooks: ["El mesías de Dune", "Hijos de Dune"],
              },
            },
          },
          {
            book: {
              title: "La Guía del Autoestopista Galáctico",
              pages: 216,
              genre: "Ciencia ficción",
              cover:
                "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1653311117i/6691227.jpg",
              synopsis:
                "Un viaje absurdo y cómico por el espacio, con toallas.",
              year: 1979,
              ISBN: "978-0345391803",
              author: {
                name: "Douglas Adams",
                otherBooks: [
                  "El restaurante del fin del mundo",
                  "La vida, el universo y todo lo demás",
                ],
              },
            },
          },
          {
            book: {
              title: "Neuromante",
              pages: 271,
              genre: "Ciencia ficción",
              cover:
                "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1554437249i/6088007.jpg",
              synopsis:
                "Una visión profética de la ciber-realidad y la inteligencia artificial.",
              year: 1984,
              ISBN: "978-0441569595",
              author: {
                name: "William Gibson",
                otherBooks: ["Conde Cero", "Mona Lisa Acelerada"],
              },
            },
          },
          {
            book: {
              title: "Fahrenheit 451",
              pages: 249,
              genre: "Ciencia ficción",
              cover:
                "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1383718290i/13079982.jpg",
              synopsis:
                "Una sociedad futura donde los libros están prohibidos y 'bomberos' queman cualquier libro que encuentren.",
              year: 1953,
              ISBN: "978-1451673319",
              author: {
                name: "Ray Bradbury",
                otherBooks: ["Crónicas marcianas", "El hombre ilustrado"],
              },
            },
          },
          {
            book: {
              title: "El resplandor",
              pages: 688,
              genre: "Terror",
              cover:
                "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641398308i/60038757.jpg",
              synopsis:
                "Una familia se muda a un hotel aislado para el invierno donde una presencia siniestra influye en el padre hacia la violencia.",
              year: 1977,
              ISBN: "978-0307743657",
              author: {
                name: "Stephen King",
                otherBooks: ["Carrie", "It"],
              },
            },
          },
          {
            book: {
              title: "Drácula",
              pages: 418,
              genre: "Terror",
              cover:
                "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387151694i/17245.jpg",
              synopsis:
                "La historia del infame conde Drácula y su intento de mudarse de Transilvania a Inglaterra.",
              year: 1897,
              ISBN: "978-0486411095",
              author: {
                name: "Bram Stoker",
                otherBooks: [
                  "La joya de las siete estrellas",
                  "La madriguera del gusano blanco",
                ],
              },
            },
          },
          {
            book: {
              title: "Frankenstein",
              pages: 280,
              genre: "Terror",
              cover:
                "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1669159060i/63631742.jpg",
              synopsis:
                "Un científico obsesionado crea una criatura viva a partir de partes de cuerpos robadas, con consecuencias desastrosas.",
              year: 1818,
              ISBN: "978-0486282114",
              author: {
                name: "Mary Shelley",
                otherBooks: ["El último hombre", "Valperga"],
              },
            },
          },
          {
            book: {
              title: "La llamada de Cthulhu",
              pages: 43,
              genre: "Terror",
              cover:
                "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1485924654i/34094154.jpg",
              synopsis:
                "La historia de un monstruo ancestral que amenaza con revivir y dominar el mundo.",
              year: 1928,
              ISBN: "978-1542461690",
              author: {
                name: "H.P. Lovecraft",
                otherBooks: [
                  "El horror de Dunwich",
                  "En las montañas de la locura",
                ],
              },
            },
          },
        ],
      },
      readingList: {
        library: [],
      },
    };
  },
  /* created() {
    if (
      localStorage.getItem("init") !== null ||
      localStorage.getItem("init") !== ""
    ) {
      if (JSON.parse(localStorage.getItem("init")) !== null) {
        console.log("libros lista", this.listBooks);
        this.listBooks = JSON.parse(localStorage.getItem("init"));
      }
    }

    if (
      localStorage.getItem("reading") !== null ||
      localStorage.getItem("reading") !== ""
    ) {
      if (JSON.parse(localStorage.getItem("reading")) !== null) {
        this.readingList = JSON.parse(localStorage.getItem("reading"));
      }
    }
  }, */
  /* mounted() {
    window.addEventListener("storage", this.actualizar);
  }, */
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
      console.log("title", title);
      console.log("origen", origen);
      console.log("destino", destino);
      const itemIndex = origen.library.findIndex((item) => {
        return item.book.title === title;
      });

      if (itemIndex !== -1) {
        const item = origen.library.splice(itemIndex, 1)[0];
        destino.library.push(item);
      }

      console.log("mover books", this.listBooks);
      /* localStorage.setItem("init", JSON.stringify(this.listBooks));
      localStorage.setItem("reading", JSON.stringify(this.readingList)); */
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
