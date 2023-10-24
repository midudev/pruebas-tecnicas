<template>
  <div>
    <button
      id="dropdownDefaultButton"
      data-dropdown-toggle="dropdownId"
      class="text-white bg-[#09f] hover:bg-[#0378c6] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      type="button"
      @click="showDropDown = !showDropDown"
    >
      Filtrar por género
      <svg
        class="w-2.5 h-2.5 ml-2.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
    <div
      id="dropdownId"
      class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute left-0 right-0 m-auto"
      :class="showDropDown ? 'block' : 'hidden'"
    >
      <ul
        class="py-2 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownDefaultButton"
      >
        <li v-for="(item, index) in list" :key="index">
          <span
            @click="clickItem(item)"
            :class="{ 'bg-blue-200': item === activeItem }"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
            >{{ item }}</span
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeItem = ref(props.list[0]);
const showDropDown = ref(false);
// eslint-disable-next-line no-undef
const emit = defineEmits(["dropDownChanged"]);
// eslint-disable-next-line no-undef
const props = defineProps({
  list: Object,
});

function clickItem(item) {
  // eslint-disable-next-line no-undef
  emit("dropDownChanged", item);
  activeItem.value = item;
  showDropDown.value = false;
}
</script>

<style lang="scss" scoped></style>
