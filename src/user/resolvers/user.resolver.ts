import User from '../dao/user.dao'

//query
const getUsersCount = async (parent, args, { req }) => {
  return await User.getUsersCount()
}

const getUsers = async (parent, args, { req }) => {
  return await User.getUsers(args.input.limit, args.input.page)
}

const getUserByEmail = async (parent, args, { req }) => {
  return await User.getUserByEmail(args.input.email)
}

const getUserById = async (parent, args, { req }) => {
  return await User.getUserById(args.input.id)
}

//mutation
const addUser = async (parent, args, context) => {
  return await User.addUser(args.input)
}

const removeUserById = async (parent, args, context) => {
  return await User.removeUserById(args.input.id)
}

const updateUserById = async (parent, args, context) => {
  return await User.updateUserById(args.input.id, args.input)
}

export default {
  Query: {
    getUsersCount,
    getUsers,
    getUserByEmail,
    getUserById,
  },

  Mutation: {
    addUser,
    removeUserById,
    updateUserById,
  },
}
