<script lang="ts">
  import { fade } from "svelte/transition";

  export let book: Book;
</script>

<picture transition:fade>
  <img src={book.cover} alt={book.title} />
  <section>
    <span>{book.author.name}</span>
    <h4>{book.title}</h4>
  </section>
  <button on:click>
    <span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="36"
        viewBox="0 0 21 21"
        width="36"
        ><g
          fill="none"
          fill-rule="evenodd"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="translate(2 5)"
          ><path
            d="m8.5 11c3.1296136 0 5.9629469-1.83333333 8.5-5.5-2.5370531-3.66666667-5.3703864-5.5-8.5-5.5-3.12961358 0-5.96294692 1.83333333-8.5 5.5 2.53705308 3.66666667 5.37038642 5.5 8.5 5.5z"
          /><path
            d="m8.5 2c.18463928 0 .36593924.01429736.54285316.04184538-.02850842.148891-.04285316.30184762-.04285316.45815462 0 1.38071187 1.1192881 2.5 2.5 2.5.156307 0 .3092636-.01434474.4576252-.04178957.0280774.17585033.0423748.35715029.0423748.54178957 0 1.93299662-1.5670034 3.5-3.5 3.5-1.93299662 0-3.5-1.56700338-3.5-3.5s1.56700338-3.5 3.5-3.5z"
          /></g
        ></svg
      >
    </span>
    <h3>Ver</h3>
  </button>
</picture>

<style>
  picture {
    display: block;
    width: 270px;
    height: 408px;
    aspect-ratio: 270/408;
    border: 3px solid var(--border-color);
    border-radius: 16px;
    position: relative;
    cursor: pointer;
    color: var(--text-black);
  }
  img {
    width: 264px;
    height: 402px;
    border-radius: 13px;
  }
  section {
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: white;
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
    width: 100%;
    height: 30%;
    padding: 18px 16px 0 16px;
    opacity: 0.94;
  }
  h4 {
    font-size: 20px;
  }
  button {
    all: unset;
    position: absolute;
    inset: 0;
    border-radius: 13px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    pointer-events: none;
    opacity: 0;
    transition: opacity 400ms;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  button span {
    width: 80px;
    height: 80px;
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 100%;
    display: grid;
    place-items: center;
  }
  button h3 {
    margin-top: 8px;
    text-align: center;
    font-size: 24px;
  }
  picture:hover button {
    opacity: 1;
    pointer-events: auto;
  }
</style>
