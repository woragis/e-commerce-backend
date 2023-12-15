import express, { Application } from 'express';
import cors from 'cors';
import { graphqlHTTP } from 'express-graphql';
import schema from './graphql/schemas';
import session from 'express-session';
import { GraphqlContext } from './types/Server.type';
import corsOptions from './config/corsConfig';
import sessionOptions from './config/sessionConfig';

// routes
import authenticationRoute from './routes/authenticationRoute';

const app: Application = express();

app.use(cors(corsOptions));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  '/graphql',
  graphqlHTTP((req): { schema: any; context: GraphqlContext } => ({
    schema: schema,
    context: { req } as GraphqlContext,
  }))
);

app.use(session(sessionOptions));

app.use('/user', authenticationRoute);

export default app;
