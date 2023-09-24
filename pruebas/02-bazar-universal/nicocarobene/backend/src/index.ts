import { Elysia } from "elysia";
import { products } from '../products.json'
import { productApp } from './controllerProduct'
import { handleError } from './handleError'
import { corsMiddleware } from './middleware'
import { swagger } from '@elysiajs/swagger'

export const App= ()=>{
  const app = new Elysia()
  .use(
  swagger({
    path: '/v2/swagger',
    documentation: {
        info: {
            title: 'Elysia Documentation',
            version: '1.0.0'
        }
  }
}))
app.use(corsMiddleware)
app.use(handleError)
app.use(productApp)
app.listen()
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
return app
}
App()