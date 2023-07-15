<template>
    <aside id="sidebar">
      <router-link to="/" class="sidebar-item">
        Inicio
      </router-link>

      <router-link to="/" class="sidebar-item end">
        Salir
      </router-link>
    </aside>
</template>

<script>
    import { RouterLink } from 'vue-router'
    import Logo from '@/components/icons/IconCommunity.vue'

    export default {
        name: 'SideBar'
    }

</script>

<style scoped>

</style>