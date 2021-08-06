import shortid from 'shortid'
import connectMongoose from '../../db/ConnectMongoose'
import { CreateUserDto } from '../dtos/create.user.dto'
import { PatchUserDto } from '../dtos/patch.user.dto'
import { PutUserDto } from '../dtos/put.user.dto'
class UsersDao {
  Schema = connectMongoose.getMongoose().Schema

  userSchema = new this.Schema(
    {
      id: {
        type: String,
        unique: true,
        primaryKey: true,
      },
      identification: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
        unique: true,
      },
      name: {
        type: String,
        required: false,
      },
      lastName: {
        type: String,
        required: false,
      },
      avatar: {
        type: String,
        required: false,
      },
    },
    { id: false }
  )

  User = connectMongoose.getMongoose().model('Users', this.userSchema)

  constructor() {}

  async addUser(userFields: CreateUserDto) {
    const userId = shortid.generate()
    const user = new this.User({
      id: userId,
      ...userFields,
    })
    await user.save()
    return user
  }

  async getUserByEmail(email: string) {
    return this.User.findOne({ email }).exec()
  }

  async removeUserById(userId: string) {
    return this.User.deleteOne({ email: userId }).exec()
  }

  async getUserById(userId: string) {
    return this.User.findOne({ id: userId }).populate('User').exec()
  }

  async getUsers() {
    return this.User.find().exec()
  }

  async getUsersCount() {
    return this.User.find().count().exec()
  }

  async updateUserById(userId: string, userFields: PatchUserDto | PutUserDto) {
    const existingUser = await this.User.findOneAndUpdate(
      { id: userId },
      { $set: userFields },
      { new: true }
    ).exec()

    return existingUser
  }
}

export default new UsersDao()
