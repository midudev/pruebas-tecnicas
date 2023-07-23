<template>
    <nav>
        <ul>
            <li><a href="#">Catálogo</a></li>
            <li><a href="#">Lista de Lectura</a></li>
        </ul>
    </nav>

    <main>
        <BookCatalogue />
        <ReadList />
    </main>
</template>


<script setup>
import BookCatalogue from '@/components/BookCatalogue.vue'
import ReadList from '@/components/ReadList.vue'
</script>


<style scoped></style>