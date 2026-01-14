const { StatusCodes } = require('http-status-codes')
const User = require('../models/User')
const { BadRequestError, UnauthenticatedError } = require('../errors')

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password')
  }

  const user = await User.findOne({ email })

  if (!user) {
    throw new UnauthenticatedError('Invalid Credentials')
  }

  const passwordCompare = await user.comparePassword(password)

  if (!passwordCompare) {
    throw new UnauthenticatedError('Invalid Credentials')
  }

  const token = user.createToken()

  res.status(StatusCodes.OK).json({ name: user.name, token })
}

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError('Please provide all values');
  }

  const emailNormalized = email.toLowerCase();

  const userExists = await User.findOne({ email: emailNormalized });
  if (userExists) {
    throw new BadRequestError('Email already exists');
  }

  const user = await User.create({
    name,
    email: emailNormalized,
    password,
  });

  const token = user.createToken();

  res
    .status(StatusCodes.CREATED)
    .json({ name: user.name, token });
};


module.exports = { login, register }