<template>
  <hello-world />
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
import { mapActions } from 'vuex'

  export default {
    name: 'home-view',
    created() {
      this.getLibrary()
    },
    methods: {
      ...mapActions(['getLibrary'])
    },

    components: {
      HelloWorld,
    },
  }
</script>
