import * as dotenv from 'dotenv';
dotenv.config();
import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import { makeExecutableSchema } from 'graphql-tools';
import * as loaders from './loaders';
import resolvers from './resolvers';
import typesDefs from './schema';

const app: express.Application = express();

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [typesDefs],
  resolvers
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    context: { loaders },
    graphiql: true
  })
);

app.listen(4000, () =>
  process.stdout.write('Now browse to localhost:4000/graphql \n')
);
