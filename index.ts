import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import './src/db/ConnectMongoose'
import UserTypeDefs from './src/user/typeDefs/user'
import UserResolver from './src/user/resolvers/resolver'
require('dotenv').config()

const app = express()
const port = process.env.PORT
app.use(cors())
app.use(express.json())

let apolloServer: ApolloServer
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs: [UserTypeDefs],
    resolvers: [UserResolver],
  })
  await apolloServer.start()
  apolloServer.applyMiddleware({ app })
}
startServer()

app.get('/', function (req, res) {
  res.json({ data: 'api working' })
})

app.listen(port, function () {
  console.log(`Server running on port ${port}`)
  console.log(`gql path is /graphql`)
})
