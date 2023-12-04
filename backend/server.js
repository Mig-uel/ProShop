const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

const connectDB = require('./config/db')
const products = require('./data/products')

dotenv.config()
connectDB() // connect to mongodb

const app = express()
const port = process.env.PORT || 5000
const env = process.env.NODE_ENV

// middleware
app.use(morgan('dev')) // <--- HTTP request logger using morgan

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
