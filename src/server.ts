import express, { Application } from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { mergedResolvers, mergedTypeDefs } from './schema/schemas';
import db from './db';

const server: Application = express();

const graphqlServer = new ApolloServer({
  typeDefs: mergedTypeDefs,
  resolvers: mergedResolvers,
});

(graphqlServer as any).applyMiddleware({ server }); // Corrected this line

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.get('/', (req, res) => {
  return res.send('Hello!');
});

export default server;
