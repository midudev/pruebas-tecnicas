# Descripción

Solución a la primera prueba técnica propuesta por [midudev](https://github.com/midudev). 

El repositorio de las pruebas técnicas lo puedes encontrar en este [repositorio de pruebas técnicas](https://github.com/midudev/pruebas-tecnicas).

## Objetivos

Con esta prueba pretendo poner en prácticas los conocimientos que voy adquiriendo en el desarrollo de aplicaciones web con la librería [React](https://react.dev/).

## Breve descripción de la prueba

Desarrollar una aplicación web que permita:

- Mostrar un listado de libros
- Filtrar por el género del libro
- Añadir libros a una lista de lectura
- Persistir la lista de libros en el almacenamiento local
- Sincronizar la lista de libros cuando tengamos varias pestañas abiertas
  
La aplicación se debe desplegar en algún servicio de hosting.

Además hay que implementar al menos un test. Aquel test que se considere más importante.

## Tecnologías

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/) 
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Tabler icons](https://tabler-icons.io/)

## Consideraciones

Se ha tratado de separar la lógica de presentación `/components` y `/hooks` de la lógica de negocio `/services` y `/storage`. 

Los libros con los que trabaja la aplicación los recupera el servicio `/services/books#getAllBooks` que devuelve una promesa con la lista de libros que se encuentra en el fichero `/data/books.json`. A futuro se podría cambiar la implementación para recuperar los libros de una API.

Por otro lado el test `App.test.tsx` usa su propio fichero de libros `/test/books.json` para tener mayor control de los datos de entrada.

## Uso

- Instala el proyecto con el el comando `npm install`
- Ejecuta los test con el comando `npm run test`
- Arranca la aplicación en modo desarrollo con el comando `npm run dev`