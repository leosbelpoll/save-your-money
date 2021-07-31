import express from 'express'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import './src/db/ConnectMongoose'
require('dotenv').config()

const app = express()
const port = process.env.PORT
app.use(cors())
app.use(express.json())

let apolloServer: ApolloServer = null
async function startServer() {
  apolloServer = new ApolloServer({
    typeDefs: [//add typeDefs ],
    resolvers: [//add resolvers],
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
