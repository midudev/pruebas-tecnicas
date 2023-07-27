<script>
  export let data
  

  import "../app.css";

  import {KEY_VIEW_MODE} from "$lib/constants.js"
  import PageTransition from '$lib/components/PageTransition.svelte'
  import Header from "$lib/components/Header.svelte"
  import { browser } from "$app/environment";

  let darkMode = true

  if(browser){
    const darkModeActive = localStorage.getItem(KEY_VIEW_MODE)

    if(darkModeActive === null || darkModeActive == 'true'){
      document.documentElement.classList.add('dark') 
      localStorage.setItem(KEY_VIEW_MODE, true)
      darkMode = true
    } else {
      darkMode = false
      localStorage.setItem(KEY_VIEW_MODE, false)
      document.documentElement.classList.remove('dark') 
    }
  }

</script>

<main class="container mx-auto py-1 px-2" >
  <Header {darkMode} />
  <PageTransition key={data.url} duration={2000}>
    <slot />
  </PageTransition>
</main>
