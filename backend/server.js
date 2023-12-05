const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

const connectDB = require('./config/db')
const productRoutes = require('./routes/product.route')

dotenv.config()
connectDB() // connect to mongodb

const app = express()
const port = process.env.PORT || 5000
const env = process.env.NODE_ENV

// middleware
app.use(morgan('dev')) // <--- HTTP request logger using morgan
app.use('/api/products', productRoutes) // defines the routes for the /api/products path

app.listen(port, () => {
  console.log(`ProShop server running on port: ${port}`)
})
