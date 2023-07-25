<script lang="ts">
    import { bookList } from "../store/books.store";
  export let name: string;
  export let description: string;
  export let author: string;
  export let image: string;
  export let genre: string;
  import { readBookList } from "../store/read.list.store";

  window.addEventListener("storage", (event) => {
    if (event.key === "favorites") {
      readBookList.update(JSON.parse(event.newValue));
    }
  });

  const handleAddFavorites = () => {

    const bookSelected = {
      title: name,
        synopsis: description,
        genre,
        author: { name: author },
        cover: image,
    }

    readBookList.update((prevData) => [
      ...prevData,
      bookSelected
    ]);
    bookList.update(prevData => prevData.filter(({book}) => book.title !== bookSelected.title))
  };
</script>

<li class="bg-white rounded-lg overflow-hidden">
  <picture>
    <img src={image} alt={name} class="object-cover w-full md:h-[450px]" />
  </picture>
  <div class="px-3 py-4">
    <h2 class="font-bold">
      {name}
    </h2>
    <p>
      {description}
    </p>
    <p>
      {genre}
    </p>
    <span class="italic mt-4 inline-block">
      {author}
    </span>
    <div>
      <button on:click={handleAddFavorites}> Agregar </button>
    </div>
  </div>
</li>
