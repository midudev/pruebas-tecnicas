<script lang='ts' context='module'>

  import { CloseIcon } from '$assets/icons';

</script>

<script lang='ts'>

  export let title = 'No Title'
  export let onShouldClose: () => void

</script>

<header class='h-16 flex flex-row p-4 justify-between'>

  <div class='h-full flex items-center ml-4'>
    <h4>{title}</h4>
  </div>

  <div class='h-full flex items-center mr-4'>

    <button tabindex="0" on:click={onShouldClose}>
      <CloseIcon />
    </button>

  </div>

</header>
