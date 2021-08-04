import User from '../dao/user.dao'

class UserResolver {
  private resolver: {}

  constructor() {
    this.resolver = {
      Query: {
        getUsersCount: this.getUsersCount,
        getUsers: this.getUsers,
        getUserByEmail: this.getUserByEmail,
        getUserById: this.getUserById,
      },

      Mutation: {
        addUser: this.addUser,
        removeUserById: this.removeUserById,
        updateUserById: this.updateUserById,
      },
    }
  }

  getResolver() {
    return this.resolver
  }

  //query
  getUsersCount = async (parent: any, args: any) => {
    return await User.getUsersCount()
  }

  getUsers = async (parent: any, args: any) => {
    return await User.getUsers(args.input.limit, args.input.page)
  }

  getUserByEmail = async (parent: any, args: any) => {
    return await User.getUserByEmail(args.input.email)
  }

  getUserById = async (parent: any, args: any) => {
    return await User.getUserById(args.input.id)
  }

  //mutation
  addUser = async (parent: any, args: any) => {
    return await User.addUser(args.input)
  }

  removeUserById = async (parent: any, args: any) => {
    return await User.removeUserById(args.input.id)
  }

  updateUserById = async (parent: any, args: any) => {
    return await User.updateUserById(args.input.id, args.input)
  }
}

export default new UserResolver()
