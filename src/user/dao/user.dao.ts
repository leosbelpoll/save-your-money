import connectMongoose from '../../db/ConnectMongoose'
import { CreateUserDto } from '../dtos/create.user.dto'
import { PatchUserDto } from '../dtos/patch.user.dto'
import { PutUserDto } from '../dtos/put.user.dto'

class UsersDao {
  Schema = connectMongoose.getMongoose().Schema

  userSchema = new this.Schema(
    {
      id: {
        type: Number,
        required: true,
        unique: true,
        autoIncrement: true,
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
    const user = new this.User({
      ...userFields,
    })
    await user.save()
    return user
  }

  async getUserByEmail(email: string) {
    return this.User.findOne({ email }).exec()
  }

  async removeUserById(userId: string) {
    return this.User.deleteOne({ id: userId }).exec()
  }

  async getUserById(userId: string) {
    return this.User.findOne({ id: userId }).populate('User').exec()
  }

  async getUsers(limit = 25, page = 0) {
    return this.User.find()
      .limit(limit)
      .skip(limit * page)
      .exec()
  }

  async getUsersCount() {
    return this.User.find().count()
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
