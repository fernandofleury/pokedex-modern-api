import * as dotenv from 'dotenv';
dotenv.config();

import * as express from 'express';
import * as graphqlHTTP from 'express-graphql';
import pokemon from './resolvers/pokemon';
import schema from './schema';

const app: express.Application = express();

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: true,
    rootValue: { pokemon },
    schema
  })
);

app.listen(4000, () =>
  process.stdout.write('Now browse to localhost:4000/graphql')
);
