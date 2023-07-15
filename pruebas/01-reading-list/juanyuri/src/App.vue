<template>
  <div class="app">
		<Sidebar />
		<router-view />
	</div>
</template>

<script setup>
  import { RouterView } from 'vue-router'
  import Sidebar from '@/components/SideBar.vue'
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;800;900&display=swap');

*{
  margin:0;
  padding:0;
  font-family: 'Inter';
  box-sizing: border-box;
}
</style>
