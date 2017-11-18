import { buildSchema, GraphQLSchema } from 'graphql';

const schema: GraphQLSchema = buildSchema(`
  type Pokemon {
    name: String
    types: [String]
  }

  type Query {
    pokemon(name: String): Pokemon
  }
`);

export default schema;
