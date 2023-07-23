<script lang='ts' context='module'>

  import Accordion from "$components/accordion.svelte";
  import Toggle from "$components/toggle.svelte";

  import { booksData } from "../data";

  const { genres } = booksData;

</script>

<Accordion open={true} title='Genre' contentClass='px-6 py-2 flex flex-wrap gap-2'>

  {#each genres as genre}
    <Toggle text={genre}/>
  {/each}

</Accordion>
