import mongoose from 'mongoose'
require('dotenv').config()

const mongo_uri: any = process.env.MONGO_URI

class ConnectMongoose {
  private count = 0
  private mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    useFindAndModify: false,
  }

  constructor() {
    this.connectWithRetry()
  }

  getMongoose() {
    return mongoose
  }

  connectWithRetry = () => {
    mongoose
      .connect(mongo_uri, this.mongooseOptions)
      .then(() => {
        console.log('MongoDB is connected')
      })
      .catch((err) => {
        console.log(`MongoDB Error: ${err}`)
      })
  }
}
export default new ConnectMongoose()
