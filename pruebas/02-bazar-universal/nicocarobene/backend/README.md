# Bazar Online API
La API de Bazar Online es una parte fundamental de la aplicación que permite gestionar productos, usuarios y realizar búsquedas. Esta documentación proporciona información sobre cómo utilizar la API y sus puntos finales disponibles.

## Tabla de Contenidos

- [Introducción](#introducción)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Endpoints](#endpoints)
  - [Productos](#productos)

## Introducción
La API de Bazar Online está construida con Bun.js y Elysia para brindar funcionalidades de gestión de productos y usuarios. Esta API es esencial para la funcionalidad del front-end de la aplicación.

## Instalación

Para ejecutar la API en tu entorno local, sigue estos pasos:

1. Clona el repositorio de la API:

   ```sh
   git clone <URL_DEL_REPO_API>
   cd bazar-online-api

2. Instalación de dependencias:

  ```bash
  bun install
  ```
3. Corre los test para verificar la correcta funcionalidad de la app:

  ```bash
  bun test
  ```
4. Inicia el servidor:

  ```bash
  bun run dev
  ```
La API estará disponible en http://localhost:3000.

## Configuración
Antes de utilizar la API en producción, asegúrate de configurar las variables de entorno necesarias, como las credenciales de la base de datos y las claves de autenticación. Puedes encontrar un archivo .env.example en el repositorio como referencia.

## Endpoints
La API de Bazar Online proporciona los siguientes puntos finales principales:

Productos
GET /api/item?q=producto: Obtiene la lista de todos los productos disponibles relacionados al query params enviado por desde el cliente.
GET /api/item/:id: Obtiene un producto específico por su ID.

