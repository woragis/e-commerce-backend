import { buildSchema } from 'graphql';

const reviewTypeDefs = buildSchema(`#graphql
  type Query {
    reviews: [Review]!
    review(id: ID!): Review!
  }
  type Mutation {
    addReview(input: addReviewInput!): Review!
    editReview(input: editReviewInput!): Review!
    deleteReview(id: ID!): Review
  }

  type Review {
    _id: ID!
    userId: ID!
    productId: ID!
    rating: Int!
    comment: String!
  }

  input addReviewInput {
    userId: ID!
    productId: ID!
    rating: Int!
    comment: String!
  }

  input editReviewInput {
    _id: ID!
    userId: ID
    productId: ID
    rating: Int
    comment: String
  }
`);

export default reviewTypeDefs;
