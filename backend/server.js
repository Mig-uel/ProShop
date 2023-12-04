const express = require('express')

const products = require('./data/products')

const app = express()
const port = 5000

// all products
app.get('/api/products', (req, res) => {
  res.json(products)
})

// single product
app.get('/api/products/:id', (req, res) => {
  const { id } = req.params

  const product = products.find((p) => p._id === id)

  if (!product) res.status(404).json({ error: 'Product not found' })

  res.json(product)
})

app.listen(port, () => {
  console.log(`ProShop server running on port: ${port}`)
})
