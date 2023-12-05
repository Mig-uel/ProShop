const asyncHandler = (func) => {
  return (req, res, next) => {
    func(req, res, next).catch(next)
  }
}

// catches the error and passes it to the 'next()' function which then passes it to the error handler

module.exports = asyncHandler
