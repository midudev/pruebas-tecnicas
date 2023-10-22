# 01 - Desarrollo de una Aplicación de Lista de Libros

El objetivo de esta prueba es diseñar e implementar una pequeña aplicación web de lista de libros utilizando las herramientas de tu elección.

- Aplicación desarrollada utilizando react con vite
- Para hacer funcionar la aplicación.
* Instalar las dependencias: `yarn install`
* Iniciar servidor local: `npm run dev` 
* Para los test se ha utilizado Vitest. `npm run test`
* La sincronización de estado se realiza con redux toolkit
* El resultado de la prueba se puede visualizar en https://pruebastecnicas.vercel.app/
* Para las animaciones se ha utilizado la libreria Framer

### Funcionalidad

1. **Visualización de Libros Disponibles**: La aplicación muestra una lista de libros disponibles que el usuario pueda revisar en la parte de la izquierda.

2. **Creación de Lista de Lectura**: Haciendo clics sobre los libros disponibles automaticamente pasas a tener estado de seleccionado. Un estado anula al otro.

3. **Filtrado de Libros por Género y nombre de libro**: Los usuarios deben poder filtrar la lista de libros disponibles por género y por nombre de libro Se muestra  un contador con el número de libros disponibles, el número de libros en la lista de lectura

5. **Persistencia de Datos**: Se persisten los datos a través del local storage.

6. **Sincronización entre pestañas**: Si el usuario abre la aplicación en dos pestañas diferentes, los cambios realizados en una pestaña deben reflejarse en la otra. Sin necesidad de usar Backend.

7. **Despliegue**: El resultado de la prueba se puede visualizar en https://pruebastecnicas.vercel.app/

8. **Test**: El test realizado comprueba que se hayan cargado y renderizado 13 libros disponbiles

## Desafíos adicionales

- Implementada funcionalidad de búsqueda en la lista de libros disponibles.
- Permitir la reorganización de los libros en la lista de lectura por prioridad.
- Haz que tu diseño sea responsive.
