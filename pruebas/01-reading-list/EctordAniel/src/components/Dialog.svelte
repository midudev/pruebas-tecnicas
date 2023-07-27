<script lang="ts">
  export let dialogEl: HTMLDialogElement;
  export let onConfirmText: string;
  export let onConfirm: () => void;
  export let book: Book | null;

  function handleClick() {
    onConfirm();
    dialogEl.close();
  }
</script>

<dialog data-testid="left-modal" title={book?.title} bind:this={dialogEl}>
  <section>
    <button class="close" on:click={() => dialogEl.close()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="32"
        viewBox="0 0 21 21"
        width="32"
        ><g
          fill="none"
          fill-rule="evenodd"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="translate(5 5)"
          ><path d="m10.5 10.5-10-10z" /><path d="m10.5.5-10 10" /></g
        ></svg
      >
    </button>
    <img src={book?.cover} alt={book?.title} />
    <h2>{book?.title}</h2>
    <h4>por {book?.author.name}</h4>
    <h5>ISBN: {book?.ISBN}</h5>
    <ul>
      <li><span>Género</span><span>{book?.genre}</span></li>
      <li><span>Páginas</span><span>{book?.pages}</span></li>
      <li><span>Año</span><span>{book?.year}</span></li>
    </ul>
    <h3>Sinopsis</h3>
    <p>{book?.synopsis}</p>
    <button class="primary" on:click={handleClick}>{onConfirmText}</button>
  </section>
</dialog>

<style>
  dialog {
    display: block;
    position: fixed;
    top: 0;
    left: -320px;
    width: 320px;
    height: 100vh;
    transition: left 400ms;
    max-height: unset;
    margin: 0;
    padding: 0;
    border: none;
    background-color: #fff;
    color: var(--text-black);
  }

  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.8);
  }

  dialog[open] {
    left: 0;
  }

  section {
    height: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .close {
    all: unset;
    position: absolute;
    top: 5px;
    right: 5px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border-radius: 50%;
  }

  section img {
    width: 278px;
    height: 390px;
  }

  section h2 {
    margin-top: 20px;
    font-size: 36px;
    letter-spacing: 2px;
    line-height: 41px;
    text-transform: uppercase;
    text-wrap: balance;
  }

  section h4 {
    font-size: 20px;
  }

  section h3,
  section h4,
  section h5 {
    width: 100%;
    color: #a3a3a3;
    margin-top: 8px;
  }

  .primary {
    width: 100%;
    padding: 14px 20px;
    background-color: #fff;
    color: var(--text-black);
    border: 2px solid #111;
    border-radius: 8px;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
  }

  .primary::after {
    content: "";
    background-color: #111;
    border-radius: 8px;
    position: absolute;
    top: -2px;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 48px;
    transform: translate(4px, 4px);
    transition: transform 0.2s ease-out;
  }

  .primary:hover::after {
    transform: translate(0, 0);
  }

  section ul {
    list-style: none;
    display: flex;
    padding: 0;
    width: 100%;
    justify-content: space-between;
  }

  section ul li {
    display: flex;
    flex-direction: column;
    border: 1.5px solid #111;
    width: 88px;
    padding: 8px 12px;
    font-size: 14px;
    border-radius: 8px;
    text-align: center;
  }

  section ul li span:first-child {
    color: #a3a3a3;
    font-weight: 600;
    user-select: none;
  }

  section ul li span:last-child {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>
