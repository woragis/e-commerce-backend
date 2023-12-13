import { buildSchema } from 'graphql';

const commonTypes = buildSchema(`#graphql
input SearchInput {
  offset: Int!
  limit: Int!
}
`);

export default commonTypes;
