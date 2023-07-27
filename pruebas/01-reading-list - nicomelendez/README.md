## Configuración inicial

Antes de empezar, asegúrate de realizar la siguiente configuración:

1- Crea un archivo `.env` en la raíz del proyecto.
Para poder usar la aplicación con todas sus funcionalidades debes crear en la raiz del proyecto un archivo .env
2- Agrega la variable de entorno `DATABASE_URL` con la ruta de tu base de datos MongoDB en el archivo `.env`.

Ejemplo de .env:

DATABASE_URL = mongodb://usuario:contraseña@host:puerto/nombre_de_la_base_de_datos

## Inicio de la aplicación

Para ejecutar la aplicación, sigue estos pasos:

1- Instala las dependencias utilizando npm, yarn o pnpm:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2- Luego, inicia la aplicación con el siguiente comando:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Abre en tu navegador
Una vez que la aplicación se ejecute correctamente, abre `http://localhost:3000` en tu navegador para ver la aplicación en funcionamiento.

Con estos pasos, estarás listo para comenzar a usar la aplicación con todas sus funcionalidades.

Para probar la página web entra a `https://mybooks-nu.vercel.app/`