# Librería Vue Vuetify Pinia Jest.

## Setup
```
# Instalar dependencias.
npm install

#Ejecutar proyecto.
npm run dev

# Compilar para producción.
npm run build

# Ejecutar test.
npm test .
```
&emsp;

##Estructura del sitio.
### Contenedor y componentes.
[![](https://i.ibb.co/dM2L0Wk/aplic.png)](http://https://i.ibb.co/dM2L0Wk/aplic.png)
El contenedor se encuentra en /src y los componentes en /src/components

Contenedor | Responsabilidades
-------------  | ------------- |
App.vue    | Importar y renderizar los componentes, Inicializar store, Escuchar los cambios en localStorage y enviar los nuevos valores.  

Componente      | Responsabilidades    
-------------   | ------------- |
FiltersBar.vue  | Modificar los filtros en el store  
TotalsBar.vue   | Mostrar totales de libros desde el store 
BookList.vue    | Mostrar la lista de libros encontrados según filtro actual,. Cambiar el estado del libro 
ReadingList.vue | Mostrar los libros que se encuentran en la lista de lectura. Cambiar el estado del libro. 
Footer.vue      | Mostrar el Footer..

&emsp;

## Manejo del Estado
Para el manejo de estado se utilizó Pinia. Para la persistencia se usó el plugin pinia-plugin-persistedstate.  El estado se encuentra en... \src\store\library.js

### State
State Element  | Contiene 
-------------  | ------------- |
books:         | Array con todos los libros.
genres:        | Array de géneros. 
filters:       | Objecto con los tres filtros (titulo, género y paginas).

### Actions
Action | Recibe | Utilizado por
------------- | -------------
initialize              | Carga los datos en el estado por primera vez. |App.vue
updateFromLocalStorage  | Actualiza el estado con las novedades enviades desde el event istener. |App.vue
changeBookState         | Cambia el estado de un libro (dentro o fuera de la lista de lectura) .|BookList.vue y ReadingList.vue

### Getters
Getter  |  Devuelve   | Utilizado por
------------- | -------------
bookList:           |Array de libros encontrados. |BookList.vue
readingList:        |Array con la lista de lectura. |ReadingList.vue
qBookList:          |Cantidad de libros encontrados. |TotalsBar.vue
qBookListAvailable: |Cantidad de libros encontrados que no están en la lista de lectura. |TotalsBar.vue
qReadingList:       |Cantidad de libros que están en la lista de lectura. |TotalsBar.vue
maxPages:           |Cantidad máxima de páginas. |FiltersBar.vue
minPages:           |Cantidad mínima de páginas. FiltersBar.vue

&emsp;

##Testing.
El testing fue realizado con JEST sobre el store testeando todos los getters y actions. Se encuentra en \test\library.test.js
