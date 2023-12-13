import { buildSchema } from 'graphql';

const userTypeDefs = buildSchema(`#graphql
  type Query {
    users(input: SearchInput!): [User!]!
    user(id: ID!): User

    cards: [Card]!
    card(id: ID!): Card!

    addresses: [Address]!
    address(id: ID!): Address!
  }

  type Mutation {
    createUser(input: createUserInput!): User!
    updateUser(input: updateUserInput!): User!
    deleteUser(id: ID!): User

    addCard(input: addCardInput!): Card!
    editCard(input: editCardInput!): Card!
    deleteCard(id: ID!): Card

    addAddress(input: addAddressInput!): Address!
    editAddress(input: editAddressInput!): Address!
    deleteAddress(id: ID!): Address
  }
  
  type User {
    _id: ID!
    name: String!
    username: String!
    email: String!
    password: String!
    cards: [Card]
    addresses: [Address]
    reviews: [Review]
  }

  type Card {
    _id: ID!
    cardholderName: String!
    cardNumber: String!
    expirationDate: String!
    cvv: String!
  }

  type Address {
    _id: ID!
    state: String!
    city: String!
    cep: String!
    neighborhood: String!
    street: String!
    number: String!
    reference: String!
  }

  input createUserInput {
    _id: ID!
    name: String!
    username: String!
    email: String!
    password: String!
  }

  input updateUserInput {
    _id: ID!
    name: String
    username: String
    email: String
    password: String
  }

  input addCardInput {
    cardholderName: String!
    cardNumber: String!
    expirationDate: String!
    cvv: String!
  }

  input editCardInput {
    _id: ID!
    cardholderName: String
    cardNumber: String
    expirationDate: String
    cvv: String
  }

  input addAddressInput {
    state: String!
    city: String!
    cep: String!
    neighborhood: String!
    street: String!
    number: String!
    reference: String!
  }

  input editAddressInput {
    _id: ID!
    state: String
    city: String
    cep: String
    neighborhood: String
    street: String
    number: String
    reference: String
  }
`);

export default userTypeDefs;
