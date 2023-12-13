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
    _id: ID!
    name: String!
    price: Float!
    discount: Boolean! = false
    discount_price: Float! = 0
    description: String!
    specs: Specs!
    imageUrls: [String!]!
    quantity: Int!
    reviews: [Review]! = []
  }

  type Specs {
    weight: Float!
    dimensions: {
      height: Float!
      width: Float!
      depth: Float!
    }
  }

  input addProductInput {
    name: String!
    price: Float!
    discount: Boolean = false
    discount_price: Float = 0
    description: String!
    specs: {
      weight: Float!
      dimensions: {
        height: Float!
        width: Float!
        depth: Float!
      }
    }
    imageUrls: [String!]!
    quantity: Int!
  }

  input editProductInput {
    _id: ID!
    name: String
    price: Float
    discount: Boolean = false
    discount_price: Float = 0
    description: String
    specs: {
      weight: Float
      dimensions: {
        height: Float
        width: Float
        depth: Float
      }
    }
    imageUrls: [String]
    quantity: Int
  }
`);

export default productTypeDefs;
