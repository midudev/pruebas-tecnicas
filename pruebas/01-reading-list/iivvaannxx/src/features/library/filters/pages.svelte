<script lang='ts' context='module'>

  import Accordion from "$components/accordion.svelte";
  import MinmaxSlider from "$components/minmax-slider.svelte";

  import { booksData } from "../data";
  const { pageLimits } = booksData

</script>

<Accordion open={true} title='Pages' contentClass='px-6 py-2'>

  <MinmaxSlider

    min={pageLimits[0]} max={pageLimits[1]}
    minGap={100} labelMin='From' labelMax='To'
  />


</Accordion>
