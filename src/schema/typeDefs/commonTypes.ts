import { buildSchema } from 'graphql';

const commonTypes = buildSchema(`#graphql
input SearchInput {
  offset: Number! = 0
  limit: Number! = 30
}
`);

export default commonTypes;
