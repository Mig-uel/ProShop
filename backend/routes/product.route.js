const express = require('express')
const asyncHandler = require('../middleware/asyncHandler.middleware')
const Product = require('../models/product.model')

const router = express.Router()

// all products
router.get(
  '/',
  asyncHandler(async (req, res) => {
    const products = await Product.find({})

    if (products) return res.json(products)

    res.status(404).json({ message: 'Could not fetch products' })
  })
)

// single product
router.get(
  '/:id',
  asyncHandler(async (req, res) => {
    const { id } = req.params

    const product = await Product.findById(id)

    if (product) return res.json(product)

    res.status(404).json({ message: 'Product not found' })
  })
)

module.exports = router
