const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const fs = require('fs');

app.use(cors())

app.get('/api/search', (req, res) => {
 fs.readFile('./products.json', function(error, data){
    if (error) {
      console.error('Error al leer el archivo:', error);
      return;
    }
    return res.send(JSON.parse(data))
 })
})
app.get('/api/items/:id', (req,res)=>{
  fs.readFile("./products.json", function(error,data){
    if (error) {
      console.error('Error al leer el archivo:', error);
      return;
    }
    const productos = JSON.parse(data);
    const productoEncontrado = productos.products.find(producto => producto.id == req.params.id)
    return res.send(productoEncontrado)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})