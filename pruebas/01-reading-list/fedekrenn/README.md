# Reading List App

Este es un proyecto de una aplicación de lista de lectura desarrollado en React + vite. Pertenece a una prueba técnica propuesta por (Midudev)[https://github.com/midudev].

## Deploy 

Podés correr la aplicación desde el siguiente (Link)[https://reading-list-psi.vercel.app/] para ver una demo ya deployada o clonar el repositorio y correrlo localmente.

## Descripción

La aplicación de lista de lectura permite a los usuarios ver una lista de libros disponibles y una lista de lectura personal. Los usuarios pueden filtrar los libros disponibles por género y cantidad de páginas, y agregar libros a su lista de lectura personal. También pueden eliminar libros de la lista de lectura. Las app cuenta con la funcionalidad de sincronizado vía localStorage en tiempo real, por lo que los cambios realizados se pueden observar simultaneamente en todas las ventanas del navegador, por otra parte esto permite que se persista la información de los libros agregados a la lista de lectura personal.

## Funcionalidades principales

- Ver lista de libros disponibles.
- Filtrar libros disponibles por género y cantidad de páginas.
- Agregar libros a la lista de lectura personal.
- Ver lista de lectura personal.
- Eliminar libros de la lista de lectura personal.

## Cómo usar

1. Clona el repositorio o descarga los archivos en tu computadora.
```
git clone https://github.com/fedekrenn/pruebas-tecnicas.git
```

2. Navegar hasta la carpeta del proyecto.
```
cd pruebas/01-reading-list/fedekrenn
```

3. Instalar dependencias.
```
pnpm install
```

4. Iniciar la aplicación.
```
pnpm dev
```

## Test

El proyecto cuenta con un test sencillo de renderizado de componente

Para correr dicho test debes ejecutar el siguiente comando:
```
pnpm test
```





