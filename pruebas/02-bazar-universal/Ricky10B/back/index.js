import { app } from './src/server.js'

app.listen(app.get('PORT'), () => {
  console.log(`server listening on http://localhost:${app.get('PORT')}`)
})
