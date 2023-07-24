<script lang="ts" setup>
defineProps<{
  genero: string | null;
  generos: string[];
}>();

const emits = defineEmits(["update:genero"]);
</script>
<template>
  <Menu as="div" class="relative inline-block text-left z-10">
    <div class="flex flex-col text-base font-medium">
      Genero:
      <MenuButton
        class="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        {{ genero ? genero : "Todos" }}
        <Icon
          name="heroicons:chevron-down-20-solid"
          class="ml-2 -mr-1 h-5 w-5 text-white-200 hover:text-white-100"
          aria-hidden="true"
        />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }" v-for="item in generos">
            <button
              :class="[
                active ? 'bg-slate-500 text-white' : 'text-gray-900',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
              ]"
              @click="$emit('update:genero', item)"
            >
              <!-- <EditIcon
                :active="active"
                class="mr-2 h-5 w-5 text-slate-400"
                aria-hidden="true"
              /> -->
              {{ item }}
            </button>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              :class="[
                active ? 'bg-slate-500 text-white' : 'text-gray-900',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
              ]"
              @click="$emit('update:genero', null)"
            >
              <!-- <EditIcon
                :active="active"
                class="mr-2 h-5 w-5 text-slate-400"
                aria-hidden="true"
              /> -->
              Todos
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
