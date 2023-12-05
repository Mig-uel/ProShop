const dotenv = require('dotenv')
const colors = require('colors')

const users = require('./data/users')
const products = require('./data/products')

const User = require('./models/user.model')
const Product = require('./models/product.model')
const Order = require('./models/order.model')

const connectDB = require('./config/db')

dotenv.config()
connectDB()

// seed the db
const importData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    // insert users and stores the users that was passed to createdUsers const
    const createdUsers = await User.insertMany(users)

    // get admin user id from createdUsers array
    const adminUser = createdUsers[0]._id
    // return new array from products by spreading and adding admin user id ref
    const sampleProducts = products.map((product) => ({
      ...product,
      user: adminUser,
    }))

    // insert the sampleProducts array into db
    await Product.insertMany(sampleProducts)

    console.log('Data Imported!'.green.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}.red.inverse`)
    process.exit(1)
  }
}

// destroy db data
const destroyData = async () => {
  try {
    await Order.deleteMany()
    await Product.deleteMany()
    await User.deleteMany()

    console.log('DB Data Destroyed!'.red.inverse)
    process.exit()
  } catch (error) {
    console.error(`${error}.red.inverse`)
    process.exit(1)
  }
}

// evaluate arguments passed when running file in console and execute function
if (process.argv[2] === '-d') destroyData()
else importData()
