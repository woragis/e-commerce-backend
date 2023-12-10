import express from 'express';
import cors from 'cors';
import resolvers from './graphql/resolvers';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/');
app.get('/', (req, res) => {
  return res.send('Hello!');
});

export default app;
// src/: Contains all the source code.
// controllers/: Individual files for handling GraphQL resolver functions.
// models/: Mongoose models are defined here.
// routes/: Express route definitions.
// graphql/: Separate directories for queries, mutations, and types.
// middlewares/: Custom middleware functions.
// config/: Configuration files (e.g., database connection, environment variables).
// utils/: Utility functions and helper modules.
// tests/: Unit and integration tests.
// public/: Static files that need to be served publicly.
// scripts/: Project-related scripts or tools.
// tsconfig.json: TypeScript configuration file.
// package.json: Project dependencies and scripts.
// README.md: Project documentation.
// .gitignore: Specifies files and directories to be ignored by version control.
// .editorconfig: Maintains consistent settings across different editors.
// possible model:
// user
