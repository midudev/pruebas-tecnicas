import { mount } from "@vue/test-utils";
import { createTestingPinia } from '@pinia/testing'

import filtersBar from "../src/components/FiltersBar.vue";
test("Testing... FilterBar.vue", () => { 
    const wrapper = mount(filtersBar, {
        global: {
          plugins: [createTestingPinia({})],
        },
    })    
    expect(wrapper.text()).toBe("Libreria" );
});


import totalsBar from "../src/components/TotalsBar.vue";
test("Testing... TotalsBar.vue", () => {    
  const wrapper = mount(totalsBar, {
      global: {
         plugins: [createTestingPinia({})],
      },
  })    
  expect(wrapper.text()).toBe("Total de libros : Encontrados: 0Disponibles: 0En lista de Lectura: 0" );
});


import bookList from "../src/components/BookList.vue";
test("Testing... BookList.vue", () => {    
  const wrapper = mount(bookList, {
      global: {
         plugins: [createTestingPinia({})],
      },
  })    
  expect(wrapper.text()).toBe("Lista de Libros: No hay libros para los filtros seleccionados.Agregar a Lista de Lectura.CancelarAceptar" );
});


import readingList from "../src/components/ReadingList.vue";
test("Testing... ReadingList.vue", () => {    
  const wrapper = mount(readingList, {
      global: {
         plugins: [createTestingPinia({})],
      },
  })    
  expect(wrapper.text()).toBe("Lista de Lectura:No hay libros en la lista de lectura." );
});


import footer from "../src/components/Footer.vue";
test("Testing... Footer.vue", () => {    
  const wrapper = mount(footer, {
      global: {
         plugins: [createTestingPinia({})],
      },

  })    
  expect(wrapper.text()).toBe("© 2023 Marcos Montenegro");
});