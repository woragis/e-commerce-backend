import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

// Type Defs
import userTypeDefs from './typeDefs/UserTypeDefs';

// Resolvers
import userResolvers from './resolvers/UserResolver';

export const mergedTypeDefs = mergeTypes([userTypeDefs]);
export const mergedResolvers = mergeResolvers([userResolvers]);
