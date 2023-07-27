# Libros 

Desarrollo de la prueba tecnica nº 1 de Midudev hecha con `Astro` y `React`

#### Deploy: [https://libros1812.netlify.app/](https://libros1812.netlify.app/)

![preview image 1](https://raw.githubusercontent.com/midudev/pruebas-tecnicas/ad171f6c75c74fbcc8e604117b77b0d1e6c869a5/pruebas/01-reading-list/FrancoJavierGadea/preview/1.gif)

## Estado global

Para el manejo de del estado use: [`nanostores`](https://github.com/nanostores/nanostores)

Lo cual es la que **Astro** [recomienda](https://docs.astro.build/es/core-concepts/sharing-state/) para compartir un estado entre diferentes `astro islands`

Ademas con [nanostores/persistent](https://github.com/nanostores/persistent) puedes almacenar el estado en `localstorage` y sincronizarlo entre diferentes pestañas

Ver: `src/data/BooksStore.js`


## Cambiar el orden `drag and drop`

Para cambiar de orden los libros de la **lista de lectura** con `drag and drop` use: [``dnd-kit``](https://github.com/clauderic/dnd-kit/tree/master)

Tomando como base este [ejemplo](https://master--5fc05e08a4a65d0021ae0bf2.chromatic.com/?path=/docs/presets-sortable-vertical--drag-handle) lo adapte para que funcione tanto en **PC** como en **celulares**


ver `src/components/react/DragAndSort`


![preview image 2](https://raw.githubusercontent.com/midudev/pruebas-tecnicas/ad171f6c75c74fbcc8e604117b77b0d1e6c869a5/pruebas/01-reading-list/FrancoJavierGadea/preview/2.gif)


## View transitions y sinronizacion de estado entre paginas

Con [`Astro 2.9`](https://astro.build/blog/astro-290/) llegan el soporte para las `view transitions`.

Agrege transicion de **slide custom** para el contenido principal al cambiar entre paginas

![preview image 3](https://raw.githubusercontent.com/midudev/pruebas-tecnicas/ad171f6c75c74fbcc8e604117b77b0d1e6c869a5/pruebas/01-reading-list/FrancoJavierGadea/preview/3.gif)

Dado que si el **Acoordion de filtros** esta desplegado en una pagina y la otra no, afecta a la transicion 

Agrege un **estado global `show`** que junto con el **query param** `?show=` permite sincronizar ambas paginas para que ambas aparezca desplegado o no



#### Contacto:

- [Linkedin](https://www.linkedin.com/in/franco-javier-alvarez/)