<template>
  <div class="app">
    <MainView />
  </div>
</template>

<script setup>
import MainView from '@/views/MainView.vue'

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800;900&display=swap');

*{
  margin:0;
  padding:0;
  font-family: 'Inter';
  box-sizing: border-box;
}


.app{
  background-color: #F2F2F2;
  height: 100vh;
}


</style>
