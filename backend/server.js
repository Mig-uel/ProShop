const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')

const connectDB = require('./config/db')
const productRoutes = require('./routes/product.route')
const userRoutes = require('./routes/user.route')
const {
  notFound,
  errorHandler,
} = require('./middleware/errorHandler.middleware')

dotenv.config()
connectDB() // connect to mongodb

const app = express()
const port = process.env.PORT || 5000
const env = process.env.NODE_ENV

// middleware
app.use(express.json()) //body parser - raw json
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser()) // cookie parser
app.use(morgan('dev')) // <--- HTTP request logger using morgan
app.use('/api/products', productRoutes) // defines the routes for the /api/products path
app.use('/api/users', userRoutes) // defines the routes for the /api/users path

// error handling middleware
app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`ProShop server running on port: ${port}`)
})
