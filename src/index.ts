import * as dotenv from 'dotenv';
dotenv.config();

import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
import typesDefs from './schema';

const app: express.Application = express();

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    schema: makeExecutableSchema({
      typeDefs: [typesDefs],
      resolvers
    })
  })
);

app.listen(4000, () =>
  process.stdout.write('Now browse to localhost:4000/graphql \n')
);
