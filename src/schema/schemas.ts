import { makeExecutableSchema } from '@graphql-tools/schema';
import { buildSchema } from 'graphql';
import { mergeResolvers } from 'merge-graphql-schemas';
import { readFileSync } from 'fs';
import { resolve } from 'path';

// Type Defs
const commonTypeDefs = readFileSync(resolve(__dirname, './typeDefs/common.graphql'), 'utf-8');
const productTypeDefs = readFileSync(resolve(__dirname, './typeDefs/product.graphql'), 'utf-8');
const reviewTypeDefs = readFileSync(resolve(__dirname, './typeDefs/review.graphql'), 'utf-8');
const userTypeDefs = readFileSync(resolve(__dirname, './typeDefs/user.graphql'), 'utf-8');

// Resolvers
import reviewResolvers from './resolvers/ReviewResolver';
import userResolvers from './resolvers/UserResolver';
import productResolvers from './resolvers/ProductResolver';

const typeDefs = buildSchema(`#graphql
  type Query {
    products(input: SearchInput!): [Product!]!
    product(_id: ID!): Product!

    reviews(input: SearchInput!): [Review]!
    review(_id: ID!): Review!

    users(input: SearchInput!): [User!]!
    user(_id: ID!): User
    cards: [Card]!
    card(_id: ID!): Card!
    addresses: [Address]!
    address(_id: ID!): Address!

  }

  type Mutation {
    addProduct(input: addProductInput!): Product!
    editProduct(input: editProductInput!): Product!
    deleteProduct(_id: ID!): Product

    addReview(input: addReviewInput!): Review!
    editReview(input: editReviewInput!): Review!
    deleteReview(_id: ID!): Review

    createUser(input: createUserInput!): User!
    updateUser(input: updateUserInput!): User!
    deleteUser(_id: ID!): User

    addCard(input: addCardInput!): Card!
    editCard(input: editCardInput!): Card!
    deleteCard(_id: ID!): Card

    addAddress(input: addAddressInput!): Address!
    editAddress(input: editAddressInput!): Address!
    deleteAddress(_id: ID!): Address
  }

  ${commonTypeDefs}
  ${productTypeDefs}
  ${reviewTypeDefs}
  ${userTypeDefs}

`);

const resolvers = mergeResolvers([reviewResolvers, userResolvers, productResolvers]);

export { typeDefs, resolvers };

const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;
