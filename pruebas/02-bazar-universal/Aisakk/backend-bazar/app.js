const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const fs = require('fs');

app.use(cors())

app.get('/api/items', (req, res) => {
 fs.readFile('./products.json', function(error, data){
    if (error) {
      console.error('Error al leer el archivo:', error);
      return;
    }
    const allProducts = JSON.parse(data)
    const productEncontrado = allProducts.products.filter(item => item.category == req.query.q)
    if(productEncontrado.length !== 0){
      res.send(productEncontrado)
    }else{
      res.json({data: "Producto no encontado"})
    }

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