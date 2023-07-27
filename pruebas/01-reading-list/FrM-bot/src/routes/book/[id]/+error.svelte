<script>
  import { page } from '$app/stores'
  import Link from '$lib/components/link.svelte'
  import { LocalRotes } from '$lib/utils/routes'
</script>

<div class="grid place-content-center min-h-[70vh] justify-center items-center gap-2">
  <div class="flex gap-2 justify-center text-xl font-semibold">
    <h1 class="text-center">{$page?.error?.message}</h1>
    <span>{$page?.status}</span>
  </div>
  <div class="w-full">
    <Link variant="gradient" class="w-fit" href={LocalRotes.home}>Vorvel al inicio</Link>
  </div>
</div>
