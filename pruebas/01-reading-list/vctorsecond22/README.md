# Simulation of an e-commerce.

> The project was started with the purpose of practicing the main react hooks (useState, useEffect, useRef, useReducer, useMemo) and navigation between views (SPA).

## Original challenge
https://github.com/midudev/pruebas-tecnicas/blob/main/pruebas/01-reading-list/README.md

## Built With

- Html
- Css
- JavaScript
- React


## Live Demo (if available)

https://github.com/vctorsecond22/pruebas-tecnicas

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

--Node 
--Npm 
Text editor (VsCode)

### Install

1. Install NPM packages
 
   npm install

### Usage

 npm run dev

## Author

👤 **Victor Cruz Mendoza**

- GitHub: https://github.com/vctorsecond22
- LinkedIn: https://www.linkedin.com/in/victor-cruz-mendoza24/

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## Show your support

Give a ⭐️ if you like this project! / ¡Dale un ⭐️ si te gusta este proyecto!

## Acknowledgments
I thank Miguel Ángel Durán García (midudev) and Jonathan MirCha for all the material provided and the challenges that served as inspiration to develop this project.

 Channel: https://www.youtube.com/playlist?list=PLUofhDIg_38q4D0xNWp7FEHOTcZhjWJ29
 Course:  https://www.youtube.com/playlist?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk


## Check of project

✔ Visualización de Libros Disponibles: La aplicación debe mostrar una lista de libros disponibles que el usuario pueda revisar.

✔ Creación de Lista de Lectura: El usuario debe ser capaz de crear una lista de lectura a partir de los libros disponibles. En la UI debe quedar claro qué libros están en la lista de lectura y cuáles no. También debe ser posible mover un libro de la lista de lectura a la lista de disponibles.

✔ Filtrado de Libros por Género: Los usuarios deben poder filtrar la lista de libros disponibles por género, y se mostrará un contador con el número de libros disponibles, el número de libros en la lista de lectura y el número de libros disponibles en el género seleccionado.

✔ Sincronización de Estado: Debe haber una sincronización del estado global que refleje el número de libros en la lista de lectura y el número de libros todavía disponibles. Si un libro se mueve de la lista de disponibles a la lista de lectura, el recuento de ambos debe actualizarse en consecuencia.

✔ Persistencia de Datos: La aplicación debe persistir los datos de la lista de lectura en el almacenamiento local del navegador. Al recargar la página, la lista de lectura debe mantenerse.

✔ Implementar una funcionalidad de búsqueda en la lista de libros disponibles.

✔ Añade un nuevo filtro para filtrar los libros por número de páginas.

X  Despliegue: La aplicación debe estar desplegada en algún servicio de hosting gratuito (Netlify, Vercel, Firebase, etc) y debe ser accesible a través de una URL pública. Indica la URL en el README.

X  Test: La aplicación debe tener AL MENOS un test. Haz el test que consideres más importante para tu aplicación.

X   Añadir un componente de error de direccion.

X   Añadir visor del numero de resultados para la renderizacion del store.

X   Problemas de rutas y navegación.
    Posible solución: Histoy.push

X   Rediseñar la logica del renderizado condicional de los botones
    Posible solución: Ya no renderizar un nuevo componente, solo intercambiar los funciones que se ejecutan dentro del mismo componente.

X 	 Permitir la reorganización de los libros en la lista de lectura por prioridad.
    Posible solución: useMemo  

X   Evita que se haga la busqueda continuamente al escribir (debounce)

X	 Mejorar la distribucion del form

X    Hay elementos que desencajan al momento de cambiar ancho de la pantalla. 
     Posible solución: Haz que tu diseño sea responsive(cambiar a grid).

X 	 Iconorafia, tipografias y paleta de colores

X 	 Footer page

X 	 Pensando en equipo: Prepara tu proyecto pensando que cualquier persona de tu equipo puede tener que trabajar en él en el futuro. (scripts en el package.json, mínima documentación en el README, comentarios en el código si es necesario, etc)			(faltarian los scripts en el packaje json)

X	 Preparado para producción: Asegúrate de que tu aplicación está lista para producción. Minimiza el código, optimiza las imágenes, etc.															

X   Desarrollar el codigo de los botones de compra y la pasarela d pago.

x 	 Sincronización entre pestañas: Si el usuario abre la aplicación en dos pestañas diferentes, los cambios realizados en una pestaña deben reflejarse en la otra. Sin necesidad de usar Backend. (no encuentro como hacer que se ejecute la funcion addToCar dentro del evento storage)

X 	 POSICIONAMIENTO CEO

X 	 sustituir el mocking por el endpoint

X 	 logguin y ventanas modal |portales?

X 	 Animaciones

X 	 Drags

## Issues of accessibility
- Los botones no tienen un nombre accesible
  Cuando un botón no tiene un nombre accesible, los lectores de pantalla lo anuncian como "botón", lo que lo hace inutilizable para los usuarios que dependen de lectores de pantalla.

- Los elementos del formulario no tienen etiquetas asociadas.
  Las etiquetas garantizan que los controles de formulario se anuncien correctamente mediante tecnologías de asistencia, como lectores de pantalla.


- Los colores de fondo y de primer plano no tienen una relación de contraste suficiente.
  El texto de bajo contraste es difícil o imposible de leer para muchos usuarios.


## Issues of preformance
- First Contentful Paint        8.0 s
- Largest Contentful Paint     13.7 s
- Total Blocking Time         1,960 ms
- Cumulative Layout Shift         0
- Speed Index                  12.9 s
