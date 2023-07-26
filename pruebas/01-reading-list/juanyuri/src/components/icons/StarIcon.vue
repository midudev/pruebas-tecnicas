<template>
    <svg-icon type="mdi" :path="path" class="large"></svg-icon>
</template>
  
<script>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiStarBox } from '@mdi/js';

export default {
    name: "my-component",
    components: {
        SvgIcon
    },
    data() {
        return {
            path: mdiStarBox,
        }
    }
}
</script>
  
<style scoped>

.large {
    width: 5em;
    height: 5em;
}
</style>