<template>
  <MegaMenu />
  <div class="max-w-screen-lg m-auto p-3">
    <router-view />
  </div>
</template>

<script setup>
import MegaMenu from "@/components/MegaMenu.vue";
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #fff;
  max-width: 1200px;
  margin: auto;
  color: #2c3e50;
}

body {
  background-color: #f9f9f9;
}
</style>
