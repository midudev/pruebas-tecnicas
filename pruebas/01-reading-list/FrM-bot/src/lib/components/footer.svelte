<script>
	import Share from "$lib/icons/share.svelte";
	import Arrow from "$lib/icons/arrow.svelte";


	import Button from "./button.svelte";
	import Link from "./link.svelte";

    const sharePage = () => {
    window.navigator.share({
      url: window.location.href,
      title: window.location.hostname
    })
  }

  const portfolioLink = 'https://frm-bot.vercel.app'

  const mailLink = 'mailto:damianmaciel0@gmail.com?subject=Feedback&body=Message'

</script>
<footer class='bg-dark-v1/70'>
    <div class='w-full relative lg:max-w-[90vw] xl:max-w-screen-content max-w-[95vw] m-auto'>
      <div class='absolute right-2 flex justify-end top-[-25%] z-10'>
        <Button class='hover:-translate-y-1' on:click={() => window.scroll(0, 0)} props={{ 'aria-label': 'arrow' }}><Arrow props={{ style: 'rotate(-90deg)' }} /></Button>
      </div>
      <div class='py-4'>
        <div class='flex mb-2'>
          <p class='whitespace-nowrap flex items-center gap-2'>Built and Design by <Link variant='text' href={portfolioLink} props={{ target: '_blank' }}>Maciel Franco</Link></p>
        </div>
        <div class="flex items-center justify-end">
          <div class='flex gap-2'>
            <Button props={{ "on:click": () => sharePage(), 'aria-label': 'share' }}><Share /></Button>
            <Link variant='gradient' href={mailLink} props={{ target: '_blank' }} >damianmaciel0@gmail.com</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>