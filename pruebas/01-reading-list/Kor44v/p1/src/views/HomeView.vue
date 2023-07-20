<template>
<div>
  <Cards :data="library"/>
</div>
</template>

<script>
import { mapActions,mapState } from 'vuex'
import Cards from '@/components/Cards.vue'

  export default {
    name: 'home-view',
    created() {
      this.getLibrary()
    },
    computed: {
      ...mapState(['library'])
    },
    methods: {
      ...mapActions(['getLibrary'])
    },

    components: {
      Cards
    },
  }
</script>
