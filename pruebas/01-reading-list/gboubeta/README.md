# 01 - Desarrollo de una Aplicación de Lista de Libros

El objetivo de esta prueba es diseñar e implementar una pequeña aplicación web de lista de libros utilizando Qwik

https://reading-list-gboubeta.vercel.app/

## Indicaciones al equipo

### Desarrollo

```shell
pnpm start
```

Más info de Qwik en [QWIK.md](./QWIK.md)

### Linter

```shell
pnpm run lint
```

### Formato

```shell
pnpm run fmt.check
```

```shell
pnpm run fmt
```

### Despliegue (a Vercel)

```shell
pnpm run deploy
```

Con paso directo a producción

```shell
pnpm run deploy.prod
```

Más info de deploy en [DEPLOY.md](./DEPLOY.md)

## Tests

1. Datos

   Verificación de los datos proporcionados en `books.json`

   ```shell
   pnpm run test.data
   ```

1. Unitarios

   Test básico de un componente

   ```shell
   pnpm run test.unit
   ```

1. End to end

   Test de resquisitos y funcionamiento end to end con Playwright

   ```shell
   pnpm run test.e2e
   ```

   Se puede ver el último resultado de los tests e2e en [test-report.md](./playwright-report/test-report.md)

Más info para los tests en [TEST.md](./TEST.md)
