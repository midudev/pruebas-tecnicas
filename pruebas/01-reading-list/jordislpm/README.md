Este proyecto es una prueba tecnica para junior Frontend, es una app de libros en la cual tienes una lista de libros disponibles y puedes agregar listos desde esta lista hacia la lista de libros para leer. 

Este proyecto fue creado con Vite y utilizamos React con javaScript

Instalar dependencias.

Se utiliza pnpm, que es una alternativa mas eficiente a npm.

```
pnpm install

```
Para desplegar el Proyecto

```
pnpm dev

```

Despliegue en produccion
```
pnpm build

```


#### Regular dependencies

- vite







[x] Visualización de Libros Disponibles: La aplicación debe mostrar una lista de libros disponibles que el usuario pueda revisar.

```
La informacion de los libros disponibles se encuentra en el archivo libros.json en la carpeta json, pero se utiliza un fetch para obtener los datos.

utilizando en custom hook useBooks, por lo tanto si quieren obtener una lista de libros diferentes desde una api rest solo debe cambiar el url en este custom hook. 

tambien la data resivida del fetch es mapeada en el useBooks asi que si se utiliza un api rest u otro json para obtener una lista de libros diferentes, debes tomar en cuenta que resibes y editar el la cosntante "mappedBooks" para que la app revisa la informacion de los libros de forma correcta.

```


[x]Creación de Lista de Lectura: El usuario debe ser capaz de crear una lista de lectura a partir de los libros disponibles. En la UI debe quedar claro qué libros están en la lista de lectura y cuáles no. También debe ser posible mover un libro de la lista de lectura a la lista de disponibles.

```
Ambas listas son manejadas por un estado global que desde el contextBooks.
que son controladas con useReducer, se utiliza el dispatch de useReducer para modificar las listas.

```

[x]Filtrado de Libros por Género: Los usuarios deben poder filtrar la lista de libros disponibles por género, y se mostrará un contador con el número de libros disponibles, el número de libros en la lista de lectura y el número de libros disponibles en el género seleccionado.

```
Los filtros tambien son manejados con un estado global y controlados con useReducer.
y modificados con el dispatch.
```

[x]Sincronización de Estado: Debe haber una sincronización del estado global que refleje el número de libros en la lista de lectura y el número de libros todavía disponibles. Si un libro se mueve de la lista de disponibles a la lista de lectura, el recuento de ambos debe actualizarse en consecuencia.

```
La implementacion de ambas listas globales se hizo desde el principio como fue explicado anteriormente. 
```

[x]Persistencia de Datos: La aplicación debe persistir los datos de la lista de lectura en el almacenamiento local del navegador. Al recargar la página, la lista de lectura debe mantenerse.

```
El estado global es guardado en el localStorage cuando se abre la app por primera vez y luego se modifica el valor en el localStorage cada vez que cambia el estado.
```

[x]Sincronización entre pestañas: Si el usuario abre la aplicación en dos pestañas diferentes, los cambios realizados en una pestaña deben reflejarse en la otra. Sin necesidad de usar Backend.

```
Esta funcionalidad no la habia utilizado antes y tambien se realiza utilizando el localStore haciendo una comprobacion si la informacion del estado es igual a la del localStorage y en caso de que sea diferente se actualiza el estado.
```

[]Despliegue: La aplicación debe estar desplegada en algún servicio de hosting gratuito (Netlify, Vercel, Firebase, etc) y debe ser accesible a través de una URL pública. Indica la URL en el README.

```
La app fue desplegada en digitalOcean

```
[]Test: La aplicación debe tener AL MENOS un test. Haz el test que consideres más importante para tu aplicación.

```
Esta es mi primera experiencia con test asi que se aceptan mejoras en el test. 

```

Desafíos adicionales
¿Quieres ir más allá? Estos son algunos desafíos adicionales que puedes intentar:

[] Implementar una funcionalidad de búsqueda en la lista de libros disponibles.
[] Añade un nuevo filtro para filtrar los libros por número de páginas.
[] Permitir la reorganización de los libros en la lista de lectura por prioridad.
[] Haz que tu diseño sea responsive.