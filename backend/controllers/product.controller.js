const Product = require('../models/product.model')
const asyncHandler = require('../middleware/asyncHandler.middleware')

// @desc    Fetch all products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({})

  if (products) return res.json(products)
  else {
    res.status(404)
    throw new Error('Could not fetch products')
  }
})

// @desc    Fetch single product
// @route   GET /api/product/:id
// @access  Public
const getProductById = asyncHandler(async (req, res) => {
  const { id } = req.params

  const product = await Product.findById(id)

  if (product) return res.json(product)
  else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// could use try/catch instead of asyncHandler wrapper

module.exports = { getProducts, getProductById }

// asyncHandler(async (req, res) => {
//     const { id } = req.params

//     const product = await Product.findById(id)

//     if (product) return res.json(product)
//     else {
//       res.status(404)
//       throw new Error('Product not found')
//     }
//   })
