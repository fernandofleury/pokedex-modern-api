import * as express from 'express';
import * as cors from 'cors';
import * as graphqlHTTP from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import { GRAPHIQL, PORT } from './config';
import * as loaders from './loaders';
import resolvers from './resolvers';
import typesDefs from './schema';

const app: express.Application = express();

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [typesDefs],
  resolvers
});

app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    context: { loaders },
    graphiql: GRAPHIQL
  })
);

app.listen(PORT, () =>
  process.stdout.write(`Now browse to localhost:${PORT}/graphql \n`)
);
