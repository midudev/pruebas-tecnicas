# Libros 


## Estado global

Para el manejo de del estado use: [`nanostores`](https://github.com/nanostores/nanostores)

Lo cual es la que **Astro** [recomienda](https://docs.astro.build/es/core-concepts/sharing-state/) para compartir un estado entre diferentes `astro islands`

Ademas con [nanostores/persistent](https://github.com/nanostores/persistent) puedes almacenar el estado en `localstorage` y sincronizarlo entre diferentes pestañas

Ver: `src/data/Store.js`

## Cambiar el orden `drag and drop`

Para cambiar de orden los libros de la **lista de lectura** con `drag and drop` use: [``dnd-kit``](https://github.com/clauderic/dnd-kit/tree/master)


Tomando como base este [ejemplo](https://master--5fc05e08a4a65d0021ae0bf2.chromatic.com/?path=/docs/presets-sortable-vertical--drag-handle) lo adapte para que funcione tanto en **PC** como en **celulares**


ver `src/components/react/DragAndSort`