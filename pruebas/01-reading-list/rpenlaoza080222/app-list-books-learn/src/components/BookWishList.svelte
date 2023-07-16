<script lang="ts">
  import type { Book } from "$lib/types/Book";

  export let book: Book;
  export let removeBookFromWishList: Function;
</script>

<div class="card-book">
  <div
    class="cover"
    style="
    background-image: url({book.cover})
  "
  />
  <div class="info">
    <p class="title">{book.title}</p>
    <p class="subtitle">{book.author.name}</p>
  </div>
  <button class="danger-button" on:click={() => removeBookFromWishList(book)}>
    x
  </button>
</div>

<style>
  p {
    margin: 0;
  }

  .card-book {
    display: flex;
    padding: 12px;
    gap: 8px;
    border-radius: 6px;
    background-color: white;
    align-items: center;
    height: 70px;
    position: relative;
  }

  .card-book .cover {
    width: 50px;
    height: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    min-width: 50px;
  }

  .card-book .info {
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 100%;
  }

  .card-book .info .title {
    color: #333;
    font-weight: 600;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 170px;
  }

  .card-book .info .subtitle {
    color: #484747;
    font-weight: 600;
  }

  .danger-button{
    background-color: red;
    color: white;
    height: 30px;
    width: 30px;
    outline: none;
    border-radius: 50%;
    position: absolute;
    top: -10px;
    right: 0;
    border: none;
  }
</style>
