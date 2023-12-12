import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

// Type Defs
import commonTypes from './typeDefs/commonTypes';
import userTypeDefs from './typeDefs/UserTypeDefs';
import productTypeDefs from './typeDefs/ProductTypeDefs';
// Resolvers
import userResolvers from './resolvers/UserResolver';

const mergedTypeDefs = mergeTypes([commonTypes, userTypeDefs, productTypeDefs]);
const mergedResolvers = mergeResolvers([userResolvers]);

export { mergedTypeDefs as typeDefs, mergedResolvers as resolvers };
