import { gql } from 'apollo-server-express'

const UserTypeDefs = gql`
  type User {
    id: ID!
    identification: String!
    email: String!
    password: String!
    name: String!
    lastName: String!
    avatar: String!
  }
  # querys
  type Query {
    getUsersCount: Int!
    getUsers: [User!]!
  }

  # input type
  input UserInput {
    identification: String!
    email: String!
    password: String!
    name: String!
    lastName: String!
    avatar: String!
  }
  # mutations
  type Mutation {
    addUser(input: UserInput!): User!
    updateUserById(id: ID!, input: UserInput!): User!
    removeUserById(id: ID!): User!
    getUserByEmail(email: String!): User!
    getUserById(id: ID!): User!
  }
`
export default UserTypeDefs
