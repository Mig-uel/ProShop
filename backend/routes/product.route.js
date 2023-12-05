const express = require('express')

const {
  getProducts,
  getProductById,
} = require('../controllers/product.controller')

const router = express.Router()

// all products
router.get('/', getProducts) // route func in controller folder

// single product
router.get('/:id', getProductById) // route func in controller folder

module.exports = router
