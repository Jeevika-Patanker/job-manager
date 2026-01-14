const { StatusCodes } = require('http-status-codes');
const { CustomAPIError } = require('../errors');

const errorHandler = (err, req, res, next) => {
  console.log('ERROR : ', err);
  // Duplicate email
  if (err.code === 11000) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: 'Email already exists' });
  }

  // Mongoose validation errors
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors)
      .map((item) => item.message)
      .join(', ');
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ msg: messages });
  }

  // Custom API errors
  if (err instanceof CustomAPIError) {
    return res
      .status(err.statusCode)
      .json({ msg: err.message });
  }

  // Fallback
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({
      msg: err.message || 'Something went wrong',
    });
};

module.exports = errorHandler;
