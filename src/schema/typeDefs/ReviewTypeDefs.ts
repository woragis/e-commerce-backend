import { gql } from 'apollo-server-express';

export const reviewTypeDefs = gql`
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
    userId: ID!
    productId: ID!
    rating: Number!
    comment: String!
  }

  input addReviewInput {
    userId: ID!
    productId: ID!
    rating: Number!
    comment: String!
  }

  input editReviewInput {
    userId: ID
    productId: ID
    rating: Number
    comment: String
  }
`;
