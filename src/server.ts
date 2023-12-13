import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schemas';
import session from 'express-session';
import { createClient } from 'redis';
import connectRedis from 'connect-redis';
import { GraphqlContext } from './types/Server.type';

const server: Application = express();

server.use(cors());

server.use(
  '/graphql',
  graphqlHTTP((req): { schema: any; context: GraphqlContext } => ({
    schema: schema,
    context: { req } as GraphqlContext,
  }))
);

const redisClient = createClient({
  password: 'VVJ4TwicsgpYgE6XDUAImZ5nzsogch9w',
  socket: {
    host: 'redis-11306.c308.sa-east-1-1.ec2.cloud.redislabs.com',
    port: 11306,
  },
});

const store = new connectRedis({ client: redisClient });
server.use(
  session({
    store,
    secret: 'woGiveUpBird',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false,
      httpOnly: true,
      maxAge: 1000 * 60 * 30,
    },
  })
);

server.use((req: Request, res: Response, next: NextFunction) => {
  if (!req.session.user) {
    req.session.user = {
      userId: null,
      admin: false,
    };
  }
});

export default server;
