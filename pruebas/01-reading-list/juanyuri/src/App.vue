<template>
  <div class="app">
    <!-- <FlashMessage /> -->
    <div class="Navigation-Bar">
      <div class="Navigation-Bar-Logo">
        <a href="#">Book-it</a>
      </div>
      <nav class="Navigation-Bar-Links">
        <ul>
          <li>
            <router-link to="/">Catalogue</router-link>
          </li>
          <li>
            <router-link to="/readlist">ReadList</router-link>
          </li>
        </ul>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import MainView from '@/views/MainView.vue'
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










.Navigation-Bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
    background-color: #fff;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.Navigation-Bar-Logo a {
    text-decoration: none;
    color: #333;
    font-size: 1.5rem;
    font-weight: bold;
}

.Navigation-Bar-Links {
    display: flex;
    align-items: center;
    margin-left: auto;
}

.Navigation-Bar-Links ul {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    list-style: none;
    margin: 0;
    padding: 0;
}

.Navigation-Bar-Links li {
    margin-right: 1em;
}

.Navigation-Bar-Links router-link {
    color: #333;
    text-decoration: none;
    font-size: 1rem;
}

.Navigation-Bar-Search {
    display: flex;
    align-items: center;
}

.Navigation-Bar-Search input[type="text"] {
    border: none;
    border-radius: 12px;
    padding: 0.5em 1em;
    margin-right: 0.5em;
    font-size: 1em;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
}

.Navigation-Bar-Search input[type="text"]:focus {
    outline-color: #DAAA63;
}

.Navigation-Bar-Search button {
    background-color: #DAAA63;
    border: none;
    border-radius: 12px;
    color: #fff;
    font-size: 1em;
    font-weight: bold;
    padding: 0.5em 1em;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
}

.Navigation-Bar-Search button:hover {
    background-color: #C7A259;
}
</style>
