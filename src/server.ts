import express, { Application } from 'express';
import { graphqlHTTP } from 'express-graphql';
import cors from 'cors';

const server: Application = express();

import { mergedResolvers, mergedTypeDefs } from './schema/schemas';

import { makeExecutableSchema } from '@graphql-tools/schema';
const schema = makeExecutableSchema({ typeDefs: mergedTypeDefs, resolvers: mergedResolvers });
server.use(cors());

server.use(
  '/',
  graphqlHTTP({
    schema: schema,
  })
);

export default server;
