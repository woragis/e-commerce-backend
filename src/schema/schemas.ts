import { mergeTypes, mergeResolvers } from 'merge-graphql-schemas';

// Type Defs
import commonTypes from './typeDefs/commonTypes';
import reviewTypeDefs from './typeDefs/ReviewTypeDefs';
import userTypeDefs from './typeDefs/UserTypeDefs';
import productTypeDefs from './typeDefs/ProductTypeDefs';
// Resolvers
import reviewResolvers from './resolvers/ReviewResolver';
import userResolvers from './resolvers/UserResolver';
import productResolvers from './resolvers/ProductResolver';
import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefs = mergeTypes([commonTypes, reviewTypeDefs, userTypeDefs, productTypeDefs]);
const resolvers = mergeResolvers([reviewResolvers, userResolvers, productResolvers]);

export { typeDefs, resolvers };

const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;
