<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="text-center">
    <h1 class="text-4xl font-bold">{{ msg }}</h1>
  </div>
</template>

<style scoped>

</style>
