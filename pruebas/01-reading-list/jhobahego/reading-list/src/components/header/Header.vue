<script lang="ts" setup>
import { Ref, ref } from 'vue'
import { Genre } from '../../types.d';
import { initialFilters } from '../../contants'

const genreSelected: Ref<Genre> = ref('Todos')
const pagesSelected = ref(0)

const keywords = ref(initialFilters)

defineProps<{
  numOfAvailables: number,
  numOfReaded: number,
}>()

const emits = defineEmits<{
  (e: 'onChangePages', value: number): void
  (e: 'onChangeGenre', value: string): void
}>()
</script>

<template>
  <header class="books__header">
    <h1>libros por leer: {{ numOfAvailables }}</h1>
    <h2>libros leidos: {{ numOfReaded }}</h2>
    <form class="form">
      <label class="form__range">
        Filtrar por paginas
        <input class="form__filter" type="range" min="0" max="1500" v-model="pagesSelected" @change="emits('onChangePages', pagesSelected)">
        <span>{{ pagesSelected }}</span>
      </label>
      <label class="form__select">
        Filtrar por genero
        <select class="form__filter" v-model="genreSelected" @change="emits('onChangeGenre', genreSelected)">
          <option v-for="keyword in keywords" :value="keyword">{{ keyword }}</option>
        </select>
      </label>
    </form>
  </header>
</template>

<style scoped>
@import url(header.css);
</style>