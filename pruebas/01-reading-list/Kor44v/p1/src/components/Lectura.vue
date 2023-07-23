<template>
<v-container>
  <v-row>
    <v-col>
      <CardLectura :lectura="lectura"/>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import CardLectura from '@/components/CardLectura.vue'
import { mapState } from 'vuex';

export default {
  name: "lectura-comp",
  created() {},
  data() {
    return {};
  },
  computed:{
    ...mapState(['lectura'])
  },
  props: {},
  methods: {},
  components:{
    CardLectura
  }
};
</script>

<style lang="scss" scoped></style>