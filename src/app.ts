import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import schema from './schema/schemas';
import session from 'express-session';
import { createClient } from 'redis';
import connectRedis from 'connect-redis';
import { GraphqlContext } from './types/Server.type';
import dotenv from 'dotenv';
const env: string = process.env.NODE_ENV || 'development';
dotenv.config({ path: 'src/config/.env.' + env });

const app: Application = express();

const corsOptions = {
  origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : [],
  allowedHeaders: process.env.CORS_ALLOWED_HEADERS ? process.env.CORS_ALLOWED_HEADERS.split(',') : [],
  credentials: process.env.CORS_CREDENTIALS,
  exposedHeaders: process.env.CORS_EXPOSED_HEADERS ? process.env.CORS_EXPOSED_HEADERS.split(',') : [],
  maxAge: process.env.CORS_MAX_AGE,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: process.env.CORS_OPTIONS_SUCCESS_STATUS,
  preflightContinue: process.env.CORS_PREFLIGHT_CONTINUE,
};

app.use(cors(corsOptions));

app.use(
  '/graphql',
  graphqlHTTP((req): { schema: any; context: GraphqlContext } => ({
    schema: schema,
    context: { req } as GraphqlContext,
  }))
);

const redisClient = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_SOCKET_HOST,
    port: process.env.REDIS_SOCKET_PORT,
  },
});

const store = new connectRedis({ client: redisClient });

app.use(
  session({
    store,
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.SESSION_COOKIE_SECURE,
      httpOnly: process.env.SESSION_COOKIE_HTTP_ONLY,
      maxAge: process.env.SESSION_COOKIE_MAX_AGE,
    },
  })
);

app.use((req: Request, res: Response, next: NextFunction) => {
  if (!req.session.user) {
    req.session.user = {
      userId: null,
      admin: false,
    };
  }
});

export default app;
