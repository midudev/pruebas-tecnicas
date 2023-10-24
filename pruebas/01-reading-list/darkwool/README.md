# Libreria, prueba técnica 01 - [ver en vivo](https://darkwool-libreria.netlify.app/)

Hecho **con**:

- React JS
- Tailwind
- Vite / Vitest

¡Nos veremos pronto con más desafíos!, es un gusto poder aportar mi grano de arena en el primero de ellos.

## Cosas a mejorar

Utilizar `zutsand` para poder contar con una mejor organización y manejo del estado global.

## Características

1. Visualización de Libros Disponibles: La aplicación debe mostrar una lista de libros disponibles que el usuario pueda revisar.
   1.Creación de Lista de Lectura: El usuario debe ser capaz de crear una lista de lectura a partir de los libros disponibles. En la UI debe quedar claro qué libros están en la lista de lectura y cuáles no. También debe ser posible mover un libro de la lista de lectura a la lista de disponibles.
1. Filtrado de Libros por Género, Título y número de páginas.
1. Sincronización de Estado: Debe haber una sincronización del estado global que refleje el número de libros en la lista de lectura y el número de libros todavía disponibles. Si un libro se mueve de la lista de disponibles a la lista de lectura, el recuento de ambos debe actualizarse en consecuencia.
1. Persistencia de Datos: La aplicación debe persistir los datos de la lista de lectura en el almacenamiento local del navegador. Al recargar la página, la lista de lectura debe mantenerse.
1. Sincronización entre pestañas: Si el usuario abre la aplicación en dos pestañas diferentes, los cambios realizados en una pestaña deben reflejarse en la otra. Sin necesidad de usar Backend.
1. Despliegue: La aplicación debe estar desplegada en algún servicio de hosting gratuito (Netlify, Vercel, Firebase, etc) y debe ser accesible a través de una URL pública. Indica la URL en el README.
1. Test: La aplicación debe tener AL MENOS un test. Haz el test que consideres más importante para tu aplicación.
1. Diseño responsivo y accesible.
