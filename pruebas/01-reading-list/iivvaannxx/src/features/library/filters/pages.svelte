<script lang='ts' context='module'>

  import Accordion from "$components/accordion.svelte";
  import MinmaxSlider from "$components/minmax-slider.svelte";

</script>

<Accordion open={true} title='Pages' contentClass='px-6 py-2'>

  <MinmaxSlider min={0} max={1000} />


</Accordion>
