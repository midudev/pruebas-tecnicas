# Bazar Online: Introducción
Este proyecto es una prueba técnica centrada en la creación de una aplicación web simple y rápida para la comodidad de los usuarios. Para lograr este objetivo, hemos optado por utilizar dos frameworks que nos ayudarán a garantizar velocidad y facilidad de uso sin comprometer la seguridad y la robustez de la aplicación. Para ello, hemos elegido Astro para las partes estáticas de la aplicación, lo que nos permite lograr una carga más eficiente, y Preact para la implementación de Hooks y otras herramientas de desarrollo de la biblioteca React, pero en una forma más comprimida y liviana.

# Importante:
Antes de iniciar el proyecto asegurate de levantar el servicio de la API localizado en la carpeta Backend, para un correcto funcionamiento de la app. Una ves localizado en la carpeta ejecuta el comando bun run dev el cual levantara un servidor en el puerto http://localhost:3000, donde se la aplicacion de Bazar online solicita los productos para mostrarlos al cliente. De otra forma algunas funcionalidades de la aplicacion no funcionaran correctamente.

# Cómo iniciar el proyecto:
Para comenzar a trabajar en el proyecto, sigue estos pasos:
```sh
pnpm install
pnpm run dev
```

## Estructura del Proyecto 🚀

Dentro del proyecto de Astro, encontrarás la siguiente estructura de carpetas:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── test/
     └── example.spec.ts
```

## Comandos Disponibles 🧞

Puedes ejecutar los siguientes comandos desde tu terminal preferida:

| Command                    | Action                                           |
| :------------------------  | :----------------------------------------------- |
| `pnpm install`             | Instalacion de dependencias                      |
| `pnpm run dev`             | Levantar servidor local en `localhost:4321`      |
| `pnpm run test`            | Ejecucion de tests e2e con playwriteht           |
| `pnpm run build`           | Contruccion de proyecto en `./dist/`             |

Con esta guía, esperamos que puedas comenzar a trabajar en el proyecto de Bazar Online de manera eficiente y efectiva. ¡Buena suerte!