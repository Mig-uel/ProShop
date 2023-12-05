const bcrypt = require('bcryptjs')

const password = '123456'

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync(password, 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'John@email.com',
    password: bcrypt.hashSync(password, 10),
    isAdmin: false,
  },
  {
    name: 'Jane Doe',
    email: 'Jane@email.com',
    password: bcrypt.hashSync(password, 10),
    isAdmin: false,
  },
]

module.exports = users
