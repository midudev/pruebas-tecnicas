<script lang="ts">
  import DavBooksIcon from '../components/icons/DavBooksIcon.svelte';
  const name = 'David';
  let age = 21;

  function ageing() {
    age++;
  }
</script>

<h1>
  Hola {name}
</h1>

<p>Estas a punto de cumplir {age} años</p>
<button on:click={ageing}>Cumplir años</button>

<DavBooksIcon />
