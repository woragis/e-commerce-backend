import { buildSchema } from 'graphql';

const userSchema = buildSchema(`#graphql
  type Query {
    users: [User!]!
    user(id: ID!): User

    cards: [Card]!
    card(id: ID!): Card!

    addresses: [Address]!
    address(id: ID!): Address!
  }
  
  type Mutation {
    createUser(input: createUserInput): User!
    updateUser(input: updateUserInput): User!
    deleteUser(id:ID!): User

    addCard(input: addCardInput): Card!
    editCard(input: editCardInput): Card!
    deleteCard(id: ID!): Card

    addAddress(input: addAddressInput): Address!
    editAddress(input: editAddressInput): Address!
    deleteAddress(id: ID!): Address
  }

  type User {
    id: ID!
    email: String!
    password: String!
    cards: [Card]
    addresses: [Address]
  }

  type Card {
    id: ID!
    cardholderName: String!
    cardNumber: String!
    expirationDate: String!
    cvv: String!
  }

  type Address {
    id: ID!
    state: String!
    city: String!
    cep: String!
    neighborhood: String!
    street: String!
    number: String!
    reference: String!
  }

  input createUserInput {
    email: String!
    password: String!
  }

  input updateUserInput {
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
    state: String
    city: String
    cep: String
    neighborhood: String
    street: String
    number: String
    reference: String
  }
`);
