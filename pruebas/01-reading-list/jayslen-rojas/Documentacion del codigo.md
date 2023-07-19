# Documentacion del codigo
En esta parte del readme explicare como funciona el codigo en mi aplicacion web.

Para hacer la prueba utilize react, este contiene **2 Custom Hooks**, y **2 Context** se explica mas adelante para que los utilize.

### Context

El context **BooksContext** es utilizado para guardar la lista de todos los libros en un estado, este mismo usa tiene una funcion llamada **updateBooks** la cual permite actualizar el estado, cambiando una propiedad de los libros **isSaved** a true or false para saber si va a la lista o no, tambien dentro de la funcion guardamos los datos de los libros en el localStorage.

El context **BooksListContext** es utilizado con un estado para guardar los libros que van a la lista, y tiene una funcion para actualizar el estado creada para evitar el pasar la actualizacion del estado como prop.


### Custom Hooks

El Custom Hook **UseBookListContext.js** este hook es utilizado para eliminar y anadir un libro del carrito, utiliza tanto la funcion para actualizar el estado de los libros del **BooksContext** como la funcion del **BooksListContex** para actualizar el estado de los libros que van a la lista 

**MAS POR EXPLICAR**
