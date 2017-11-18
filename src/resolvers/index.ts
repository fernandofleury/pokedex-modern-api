import * as pokemon from './pokemon';

const resolvers = {
  Query: {
    pokemon: pokemon.resolveQuery
  },
  Pokemon: {
    types: pokemon.resolveTypes
  }
};

export default resolvers;
