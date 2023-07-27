🔗 [reading-list](reading-list-two.vercel.app)

# Prueba técnica 01 - Desarrollo de una Aplicación de Lista de Libros

Proyecto de [pruebas técnicas](https://pruebastecnicas.com) para desarrolladores frontend y backend creado por [midudev](https://github.com/midudev).

El objetivo de esta prueba es diseñar e implementar una pequeña aplicación web de lista de libros utilizando las herramientas de tu elección.

## Requisitos

### Funcionalidad

- [x] **Visualización de Libros Disponibles**: La aplicación debe mostrar una lista de libros disponibles que el usuario pueda revisar.

- [x] **Creación de Lista de Lectura**: El usuario debe ser capaz de crear una lista de lectura a partir de los libros disponibles. En la UI debe quedar claro qué libros están en la lista de lectura y cuáles no. También debe ser posible mover un libro de la lista de lectura a la lista de disponibles.

- [x] **Filtrado de Libros por Género**: Los usuarios deben poder filtrar la lista de libros disponibles por género, y se mostrará un contador con el número de libros disponibles, el número de libros en la lista de lectura y el número de libros disponibles en el género seleccionado.

- [x] **Sincronización de Estado**: Debe haber una sincronización del estado global que refleje el número de libros en la lista de lectura y el número de libros todavía disponibles. Si un libro se mueve de la lista de disponibles a la lista de lectura, el recuento de ambos debe actualizarse en consecuencia.

- [x] **Persistencia de Datos**: La aplicación debe persistir los datos de la lista de lectura en el almacenamiento local del navegador. Al recargar la página, la lista de lectura debe mantenerse.

- [x] **Sincronización entre pestañas**: Si el usuario abre la aplicación en dos pestañas diferentes, los cambios realizados en una pestaña deben reflejarse en la otra. Sin necesidad de usar Backend.

## Desafíos adicionales

**¿Quieres ir más allá?** Estos son algunos desafíos adicionales que puedes intentar:

- [x] Implementar una funcionalidad de búsqueda en la lista de libros disponibles.
- [x] Añade un nuevo filtro para filtrar los libros por número de páginas.
- [ ] Permitir la reorganización de los libros en la lista de lectura por prioridad.
- [x] Haz que tu diseño sea responsive.

## Comandos del proyecto

### Instalación

- Instalar dependencias

```bash
  cd pruebas/01-reading-list/martiks38
  pnpm install
```

- Ejecutar proyecto

```bash
  pnpm dev
```

- Build

```bash
  pnpm build
```

- Ejecutar lint

  ```bash
    pnpm run lint
  ```

- Comandos de ejecución de tests

  - Ejecución de todos los tests

    ```bash
      pnpm run test
    ```

  - Ejecución del test coverage

    ```bash
      pnpm run test:coverage
    ```

  - Ejecución de la interfaz gráfica de tests

    ```bash
      pnpm run test:ui
    ```

  - Ejecución de test determinados por patrón

    ```bash
      pnpm run test:pattern <pattern>
    ```

## Tecnologías usadas

La página web está desarrollada con el framework [Next.js](https://nextjs.org) y utilizó CSS Modules para estilizar.
Para probar y validar el funcionamiento de la aplicación, utilizó la librería [Vitest](https://vitest.dev) junto a [Testing Library](https://testing-library.com).
