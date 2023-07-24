<h1 align="center">Reading List</h1>

URL https://pruebas-tecnicas-psi.vercel.app 🔗

<p align="center">
  <a href="https://pruebas-tecnicas-psi.vercel.app" target="_blank"><img src="https://github.com/rubenperegrina/pruebas-tecnicas/blob/ad3e3905ee3bef3e996f5484b00cb6b9549260c9/pruebas/01-reading-list/rubenperegrina/reading-list/public/readme-img.PNG" alt="Reading list app"></a>
  <br/><br/>
</p>
![Sin título-2023-03-24-0943 (1)](https://github.com/rubenperegrina/pruebas-tecnicas/blob/ad3e3905ee3bef3e996f5484b00cb6b9549260c9/pruebas/01-reading-list/rubenperegrina/reading-list/public/readme-img.PNG)


## Contexto

Somos un sello editorial de libros multinacional. Queremos ofrecer a nuestro público una forma de ver nuestro catálogo y poder guardar los libros que les interesan en una lista de lectura.

Para ello, queremos desarrollar una aplicación web que permita a los usuarios ver los libros disponibles y crear una lista de lectura. Ten en cuenta que:

- No sabemos si el framework que utilicemos ahora será el definitivo, pero querremos reutilizar el máximo de código posible.
- La aplicación debe ser fácil de usar y agradable a la vista.
- Tenemos un 80% de usuarios que vienen de navegadores de escritorio.

Usa el archivo `books.json` para obtener los datos de los libros. Puedes añadir más libros si lo deseas, siempre y cuando siga la misma estructura.

## Requisitos

### Funcionalidad

1. **Visualización de Libros Disponibles**: La aplicación debe mostrar una lista de libros disponibles que el usuario pueda revisar.

2. **Creación de Lista de Lectura**: El usuario debe ser capaz de crear una lista de lectura a partir de los libros disponibles. En la UI debe quedar claro qué libros están en la lista de lectura y cuáles no. También debe ser posible mover un libro de la lista de lectura a la lista de disponibles.

3. **Filtrado de Libros por Género**: Los usuarios deben poder filtrar la lista de libros disponibles por género, y se mostrará un contador con el número de libros disponibles, el número de libros en la lista de lectura y el número de libros disponibles en el género seleccionado.

4. **Sincronización de Estado**: Debe haber una sincronización del estado global que refleje el número de libros en la lista de lectura y el número de libros todavía disponibles. Si un libro se mueve de la lista de disponibles a la lista de lectura, el recuento de ambos debe actualizarse en consecuencia.

5. **Persistencia de Datos**: La aplicación debe persistir los datos de la lista de lectura en el almacenamiento local del navegador. Al recargar la página, la lista de lectura debe mantenerse.

6. **Sincronización entre pestañas**: Si el usuario abre la aplicación en dos pestañas diferentes, los cambios realizados en una pestaña deben reflejarse en la otra. Sin necesidad de usar Backend.

7. **Despliegue**: La aplicación debe estar desplegada en algún servicio de hosting gratuito (Netlify, Vercel, Firebase, etc) y debe ser accesible a través de una URL pública. Indica la URL en el README.

8. **Test**: La aplicación debe tener AL MENOS un test. Haz el test que consideres más importante para tu aplicación.

## Consejos sobre el código

1. **Estructura del código**: El código debe estar bien organizado y fácil de leer.

2. **Semántica HTML**: El HTML debe ser semántico y accesible.

3. **Pensando en equipo**: Prepara tu proyecto pensando que cualquier persona de tu equipo puede tener que trabajar en él en el futuro. (scripts en el package.json, mínima documentación en el README, comentarios en el código si es necesario, etc)

4. **Formatea tu código**: Asegúrate de que tu código está formateado de forma consistente. Puedes usar Prettier o cualquier otra herramienta que te guste.

5. **Preparado para producción**: Asegúrate de que tu aplicación está lista para producción. Minimiza el código, optimiza las imágenes, etc.

## Desafíos adicionales

**¿Quieres ir más allá?** Estos son algunos desafíos adicionales que puedes intentar:

- Implementar una funcionalidad de búsqueda en la lista de libros disponibles.
- Añade un nuevo filtro para filtrar los libros por número de páginas.
- Permitir la reorganización de los libros en la lista de lectura por prioridad.
- Haz que tu diseño sea responsive.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
