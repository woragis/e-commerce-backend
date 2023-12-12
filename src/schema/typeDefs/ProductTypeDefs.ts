import { buildSchema } from 'graphql';

const productTypeDefs = buildSchema(`#graphql
  type Query {
    products(input: SearchInput!): [Product!]!
    product(id: ID!): Product!
  }

  type Mutation {
    addProduct(input: addProductInput!): Product!
    editProduct(input: editProductInput!): Product!
    deleteProduct(id: ID!): Product
  }

  type Product {
    name: String!
    price: Number!
    discount: Number
    description: String!
    technicalInfo: TechnicalInfo!
    imageUrls: [String!]!
    quantity: Number!
    reviews: [Review!]!
  }

  type TechnicalInfo {
    weight: Number!
    dimensions: {
      height: Number!
      width: Number!
      depth: Number!
    }
  }

  input addProductInput {
    name: String!
    price: Number!
    discount: Number
    description: String!
    technicalInfo: {
      weight: Number!
      dimensions: {
        height: Number!
        width: Number!
        depth: Number!
      }
    }
    imageUrls: [String!]!
    quantity: Number!
  }

  input editProductInput {
    name: String
    price: Number
    discount: Number
    description: String
    technicalInfo: {
      weight: Number
      dimensions: {
        height: Number
        width: Number
        depth: Number
      }
    }
    imageUrls: [String]!
    quantity: Number
  }
`);

export default productTypeDefs;
