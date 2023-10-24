Pagina desplegada en https://cozy-hamster-fb9d9f.netlify.app/
GitHub repo: https://github.com/npminit-dev/npminit-dev.git

/////////////////////////////
  **BOOK-NEXUS**
/////////////////////////////

Esta proyecto fue creado con la herramienta Vite y usa React como librería para la creación de la interfaz y el manejo del estado de la aplicación, Ant Design para la mayor parte de los componentes y Typescript para la definición de tipos estáticos.

Los 3 componentes principales son: **GlobalContext**, **BookList** y **ReadList**.
 La primera contiene todas los estados que son usadas globalmente, como la lista de libros y la lista de lectura. Tambien incluye el estado que controla el modo oscuro y provee el contexto para la 'messageApi' de *Ant Design*.
 
**Booklist** brinda la lista de libros y permite mostrar sus datos, como su autor, titulo y portada, y muestra mas detalles mediante cuadros desplegables. Permite agregar a la lista de lectura además de ordenar y filtrar la lista de libros. Un contador refleja la cantidad de libros disponibles para agregar y los que se encuentran en la lista de lectura. El filtro por genero modifica este contador.

**ReadList** muestra los libros que fueron agregados desde **Booklist**,  permite marcar los libros como pendientes/leídos, quitarlos de la lista, ordenar mediante este criterio y a través de drag-and-drop además de poder realizar acciones mas generales sobre esta lista con un menu desplegable.

Tanto **BookList** como **Readlist** contienen subcomponentes que facilitan la division de tareas de la aplicación y la modularización.

El almacenamiento local del navegador se encarga de la persistencia de la lista de lectura, y los cambios en dicha lista se reflejan el almacenamiento y viceversa, además de entre pestañas. 


Para esta App utilice los siguientes módulos:

Para producción:
@ant-design/icons
@formkit/auto-animate
antd
local-storage
react-beautiful-dnd
react-dom
react-hook-form
react-icons
react-lazy-load

Para desarrollo y testing: 
picocolors
jest
ts-jest
typescript




