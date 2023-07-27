##Aplicación de Lista de Libros
**Intalación:**
```place
npm install
```
**Introducción:**
Aplicación web que permita a los usuarios ver los libros disponibles y crear una lista de lectura. Permite filtrar los libros por titulo, genero y rango de paginas.

**Funcionalidad:**

- **Visualización de Libros Disponibles:** La aplicación muestra una lista de libros disponibles que el usuario pueda revisar(libros que estan en un Book.json).

- **Lista de Lectura:** El usuario es capaz de crear una lista de lectura a partir de los libros disponibles. Los libros que No estan disponibles se muestran con una opacidad. Para mover un libro de la lista de lectura a la lista de disponibles se puede volver a selecionar el libro agregado o presionar el X para quitarlo.

- **Filtrado de Libros**: Los usuarios pueden filtrar la lista de libros disponibles por titulo, género o rnago de paginas, y se muestra un contador con el número de libros disponibles y el número de libros en la lista de lectura. Ademas del número de libros disponibles en el género seleccionado(no disponible para titulo y rango).

- **Sincronización de Estado:** Existe sincronización del estado global que refleja el número de libros en la lista de lectura y el número de libros todavía disponibles. Si un libro se mueve de la lista de disponibles a la lista de lectura, el recuento de ambos se actualiza en consecuencia.

- **Persistencia de Datos:** La aplicación permite la persistencia datos de la lista de lectura en el almacenamiento local del navegador(localStorage). Al recargar la página, la lista de lectura se mantiene.

- **Sincronización entre pestañas:** Si el usuario abre la aplicación en dos pestañas diferentes, los cambios realizados en una pestaña se ven reflejados en la otra.

- **Test:** Se hicieron pruebas E2E con cypress.

- **Despliegue:**[Pagina Web](https://pruebas-tecnicas-jade.vercel.app/)
