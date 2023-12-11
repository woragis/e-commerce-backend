import { mergeTypeDefs } from '@graphql-tools/merge';
import { mergeResolvers } from '@graphql-tools/merge';

// Type Defs
import userTypeDefs from './typeDefs/UserTypeDefs';

// Resolvers
import userResolvers from './resolvers/UserResolver';

export const mergedTypeDefs = mergeTypeDefs([userTypeDefs]);
export const mergedResolvers = mergeResolvers([userResolvers]);
