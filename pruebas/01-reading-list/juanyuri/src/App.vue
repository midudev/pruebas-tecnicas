<template>
  <div class="app">
    <NavigationBar />
  </div>
</template>

<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
/* import FlashMessage from '@/components/FlashMessage.vue' */

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800;900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap');

:root {
  /* COLORS */
  --primary-color: #DAAA63;
  --secondary-color: #333;

  /* MAIN FONTS */
  --font-size-h1: 2em;
  --title-font-weight: 800;
  --title-font-size: 1em;
  --author-name-font-weight: lighter;
  --author-name-font-size: 1.05em;

  /* OVERLAY BOOKCARD */
  --overlay-color: rgba(0, 0, 0, 0.5);
  --overlay-text-color: #fff;
  --overlay-text-font-size: 2em;
  --overlay-text-font-weight: bold;
  --overlay-text-color-highlight: #DAAA63;

  /* BUTTONS */
  --button-padding: 14px;
  --button-border-radius: 12px;
  --button-border: 1px solid rgb(180, 180, 180);

  /* IMAGES */
  --image-width: 250px;
  --image-height: 420px;

  /* FLASH MESSAGES */
  --flash-message-success: #000000;
  --flash-message-error: #de0404;
}

* {
  margin: 0;
  padding: 0;
  font-family: 'Inter';
  box-sizing: border-box;

}

body {
  background-color: #F2F2F2;
}
</style>
