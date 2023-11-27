# 🛍 Bazar universal

Challenge fullstack "Bazar Universal" donde se emula un ecommerce de productos.

## 💻 Descripción del proyecto 

El proyecto consiste en un ecommerce de productos, versión mobile, donde se puede buscar por categorías y acceder al detalle de cada producto. Se realiza el frontend con React y el backend con Node y Express. Se pone énfasis en las consignas donde se pide trabajar correctamente el ruteo, tanto de frontend como de backend, y la correcta implementación de los métodos HTTP. 

## 🛠 Instalación y ejecución

1 - Clonar el proyecto

`git clone https://github.com/fedekrenn/full-stack-ecommerce.git`

2- Instalar las dependencias de frontend y backend

`cd frontend && pnpm install`
`cd backend && pnpm install`

3 - En ambos casos, frontend y backend, correr el comando:

`pnpm dev`

4 - El frontend lee una variable de entorno llamada 'VITE_DEPLOY_ROUTE' para tomar una api externa que esté bajo deploy, de no existir este archivo .env tomará por default el localhost:3000. Para correr el proyecto con la api externa, crear un archivo .env en la carpeta frontend con la variable de entorno VITE_DEPLOY_ROUTE y asignarle el valor de la api externa.

5 - Abrir el navegador en http://localhost:5173/ para desplegar la aplicación con la vista de productos.

## 🚀 Endpoints de la API

### Detalle de producto

`GET /api/items/:id`

Devuelve el detalle de un producto en particular, donde :id es el id del producto.

### Listado de productos

`GET /api/items?q=:query`

Devuelve un listado de productos que coincidan con la búsqueda, donde :query es el término de búsqueda.

## 🛠 Tecnologías utilizadas

- React
- React Router
- Material UI
- Node
- Express

<br>

## 🙋‍♂️ Hola, Soy Federico Krenn
:nerd_face: Desarrollador web Fullstack
<br>
👨‍🎓 Realizando la Tecnicatura en Desarrollo Web en ISPC y Tecnicatura en Software Libre en la UNL
<br>
📫 Conectemos en Linkedin: https://www.linkedin.com/in/fkrenn/

