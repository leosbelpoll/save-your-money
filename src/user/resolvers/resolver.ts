import User from '../dao/user.dao'

//query
const getUsersCount = async (parent: any, args: any) => {
  return await User.getUsersCount()
}

const getUsers = async () => {
  return await User.getUsers()
}

//mutation
const addUser = async (parent: any, args: any) => {
  return await User.addUser(args.input)
}

const removeUserById = async (parent: any, args: any) => {
  return await User.removeUserById(args.input.id)
}

const updateUserById = async (parent: any, args: any) => {
  return await User.updateUserById(args.input.id, args.input)
}

const getUserByEmail = async (parent: any, args: any) => {
  return await User.getUserByEmail(args.input.email)
}

const getUserById = async (parent: any, args: any) => {
  return await User.getUserById(args.input.id)
}

const UserResolver = {
  Query: {
    getUsersCount,
    getUsers,
  },

  Mutation: {
    addUser,
    removeUserById,
    updateUserById,
    getUserByEmail,
    getUserById,
  },
}

export default UserResolver
