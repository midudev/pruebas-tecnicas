<template>
  <v-container>
    <v-row>
      <v-col cols="3">
          <v-card flat color="transparent">
            <v-card-text>
              <v-row>
                <v-col class="pr-4">
                  <v-slider
                    v-model="slider"
                    class="align-center"
                    :max="max"
                    :min="min"
                    hide-details
                  >
                    <template v-slot:append>
                      <v-text-field
                        v-model="slider"
                        class="mt-0 pt-0"
                        hide-details
                        single-line
                        type="number"
                        style="width: 50px"
                        disabled
                      ></v-text-field>
                    </template>
                  </v-slider>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
      </v-col>
      <v-col cols="3">
        <v-select
          :items="items"
          label="Standard"
          dense
        ></v-select>
         </v-col>
    </v-row>
    <v-row>
      <v-col cols="8">
        <Cards :data="library" />
      </v-col>
      <v-col cols="4"> carrito </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Cards from "@/components/Cards.vue";

export default {
  name: "home-view",
  data() {
    return {
      min: 0,
      max: 3000,
      slider:0,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
    };
  },
  created() {
    this.getLibrary();
  },
  computed: {
    ...mapState(["library"]),
  },
  methods: {
    ...mapActions(["getLibrary"]),
  },

  components: {
    Cards,
  },
};
</script>
