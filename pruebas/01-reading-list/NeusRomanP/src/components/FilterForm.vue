<script setup>

defineProps({
  genres: Array,
  pagesNum: Number
});

  const emit = defineEmits([
    'filterByGenre',
    'filterByName',
    'filterByPages'
  ]);

</script>

<template>
  <form 
    class="flex-column gap-10" 
    @submit.prevent="(e) => { e.preventDefault(); }"
  >
    <div>
      <label 
        for="genre" 
        class="genre-label"
      >
        Genero: 
      </label>
      <select 
        name="genre" 
        id="genre" 
        @change="(e) => { emit('filterByGenre', e) }"
      >
        <option value="Todos">
          Todos
        </option>
        <option 
          v-for="(genre, index) in genres" 
          :key="'g-' + (index + 1)" 
          :value="genre"
        >
          {{ genre }}
        </option>
      </select>
    </div>
    <input 
      class="search-title-input" 
      type="text" 
      id="name" 
      placeholder="Buscar por título" 
      @input="(e) => { emit('filterByName', e) }"
    >
    <label for="pages">Filtrar por número de páginas</label>
    <span>({{ pagesNum }})</span>
    <input 
      class="pages-num-input" 
      name="pages" 
      id="pages" 
      type="range" 
      min="0" 
      max="1500" 
      step="10" 
      value="1500"
      @change="(e) => { emit('filterByPages', e) }"
    >
  </form>
</template>

<style scoped>

</style>