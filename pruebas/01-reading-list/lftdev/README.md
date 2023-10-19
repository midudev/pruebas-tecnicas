# Prueba técnica | Lista de lectura
Esta es mi solución a la prueba técnica [Lista de Lectura](https://github.com/midudev/pruebas-tecnicas/blob/main/pruebas/01-reading-list/README.md).

## Tabla de contenidos

- [Requisitos](#requisitos)
- [Mis procesos](#mis-procesos)
  - [Tecnologías y técnicas empleadas](#tecnologías-y-técnicas-empleadas)
  - [Explicación general](#explicación-general)
    - [Sobre las tecnologías empleadas](#sobre-las-tecnologías-empleadas)
    - [Sobre la elaboración del código](#sobre-la-elaboración-del-código)
- [Autor](#autor)

## Requisitos

- [x] **Visualización de Libros Disponibles**: La aplicación debe mostrar una lista de libros disponibles que el usuario pueda revisar.

- [x] **Creación de Lista de Lectura**: El usuario debe ser capaz de crear una lista de lectura a partir de los libros disponibles. En la UI debe quedar claro qué libros están en la lista de lectura y cuáles no. También debe ser posible mover un libro de la lista de lectura a la lista de disponibles.

- [x] **Filtrado de Libros por Género**: Los usuarios deben poder filtrar la lista de libros disponibles por género, y se mostrará un contador con el número de libros disponibles, el número de libros en la lista de lectura y el número de libros disponibles en el género seleccionado.

- [x] **Sincronización de Estado**: Debe haber una sincronización del estado global que refleje el número de libros en la lista de lectura y el número de libros todavía disponibles. Si un libro se mueve de la lista de disponibles a la lista de lectura, el recuento de ambos debe actualizarse en consecuencia.

- [x] **Persistencia de Datos**: La aplicación debe persistir los datos de la lista de lectura en el almacenamiento local del navegador. Al recargar la página, la lista de lectura debe mantenerse.

- [x] **Sincronización entre pestañas**: Si el usuario abre la aplicación en dos pestañas diferentes, los cambios realizados en una pestaña deben reflejarse en la otra. Sin necesidad de usar Backend.

- [x] **Despliegue**: La aplicación debe estar desplegada en algún servicio de hosting gratuito (Netlify, Vercel, Firebase, etc) y debe ser accesible a través de una URL pública. Indica la URL en el README.

- [x] **Test**: La aplicación debe tener AL MENOS un test. Haz el test que consideres más importante para tu aplicación.

### Enlaces

- [Ir a la solución](https://github.com/lftdev/pruebas-tecnicas)
- [Ir al sitio](#) (No añadido aún)

## Mis procesos

### Tecnologías y técnicas empleadas

- Vite
- React
- Semantic HTML5 markup
- Tailwind CSS
- Flexbox
- CSS Grid
- Desktop-first workflow

### Explicación general

#### Sobre las tecnologías empleadas
Para empezar, opté por iniciar el proyecto mediante Vite + JavaScript Vanilla, e ir implementando manualmente los paquetes necesarios, de manera que esto me permita alivianar la carga del proyecto en el almacenamiento.

He decidido valerme de únicamente de React por estos motivos:

1. no me pareció necesario levantar la aplicación por el lado del servidor (SSR), ya que ésta no demanda una optimización de los motores de búsqueda;
2. la consigna planteó la posibilidad de que el framework empleado no sea definitivo, lo cual me llevó al inciso siguiente;
3. traté de hacer un desarrollo pensando en su posterior integración a un proyecto más grande, el cual podría ya estar desarrollado usando herramientas más complejas como Next.js.

Otras tecnologías de las que hice uso fueron TailwindCSS para el estilizado y Vitest, testing-library y happy-dom para efectuar las pruebas necesarias.

#### Sobre la elaboración del código

En lo concerniente al código en sí, analizando cada sección de [App.jsx](/src/App.jsx):

1. en primer lugar observamos los useState hooks, que permiten manipular el filtrado por páginas o por género, la aplicación mostrará, por defecto, libros a partir de 50 páginas de todos los géneros;
2. en segundo lugar tenemos dos custom hooks, uno para trabajar con la lista de libros disponibles y el respectivo para la lista de lectura. Ambos son de similar funcionamiento; devuelven el estado actual de las listas y permiten añadir o eliminar libros en ellas;
3. a continuación encontramos un useEffect hook, para suscribir a la aplicación a los eventos de Window interface en local storage; y
4. finalmente tenemos el retorno de la estructura HTML del componente App.

Al echar un vistazo sobre [App.jsx](/src/App.jsx), si bien la estructura HTML puede parecer un poco aparatosa, la desarrollé a modo de poder apreciar cada componente en funcionamiento.

Centré mi atención en poder prescindir de dicha estructura y lograr que los componentes puedan ser fácilmente reimplementados, ya sea reutilizando la misma en un proyecto más grande o en otro diseño.

## Autor

- Linkedin: [Lucas Franco Torres](www.linkedin.com/in/frontdev-lucastorres)
- GitHub: [lftdev](https://github.com/lftdev)