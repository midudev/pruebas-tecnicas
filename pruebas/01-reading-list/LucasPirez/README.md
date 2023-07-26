# App de Lista de Lectura

El objetivo fue crear una aplicacion que permita la visualizacion de libros con la capacidad de crear una lista de lectura.

## Funcionalidades
* visualizacion de todos los libros, visiblemente cuales estan en la lista de lectura
* posibilidad de filtrar libros por genero
* posibilidad de filtrar libros por numero de paginas
* implementacion de funcionalidad de busqueda
* persistencia de datos usando LocalStorage, con deteccion de cambios en otra ventana

 ## Tecnologias

 * Vite
 * React
 * TypeScript
 * TailwindCSS
 * Zustand
 * Firebase (deploy)

## Estructura de carpetas de componentes
📂 buttons:
* ButtonAddRemove.tsx, ButtonRemoveAllFilters.tsx, ButtonRemoveFilter.tsx: botoneras reutiliables que permiten la eliminacion de todos los filtros, un filtro, y agregar o remover libros de la lista de lectura, tal como su nombres los evidencian.

📂 dragAndDrop:
* DragDropContainer.tsx, DraggableContainer.tsx: Componentes que mediante el uso de la prop children permiten a los hijos convertirse en receptores de eventos drag and drop y en draggable, tal como su nombre los evidencia.

📂 filters:
* ContainerFilters.tsx: Contenedor de todos los filtros y permite visualizar los filtros aplicados.
* GenreFilter.tsx, PagesFilter.tsx, SearchFilter.tsx: setean el estado de los filtros segun corresponda.

📂 inReadingList:
* InReadingListCard.tsx: tarjeta que se encarga de visualizar la informacion del libro que se encuentra dentro de la lista de lectura
* ReadingList.tsx: genera un map de los libros para pasar mediante prop a InReadingListCard.tsx

📂 outReadingList:
* BookCard.tsx: arjeta que se encarga de visualizar la informacion del libro que se encuentra fuera de la lista de lectura
* Books.tsx: genera un map de los libros para pasar mediante prop a BookCard.tsx
* BookSynopsis.tsx: componente que mediante hover permite visualizar la synopsis de un libro
 

  ## estados globales

📂 store:
 * bookStore.ts, filterStore.ts: manejan el estado de los libros dentro y fuera de lista de lectura, y el estado de los filtros respectivamente.

   
  ### Link deploy **https://prueba-tecnica-fe6bb.web.app/**
 
