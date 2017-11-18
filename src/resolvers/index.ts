import * as pokemon from './pokemon';

const resolvers = {
  Query: {
    pokemon: pokemon.resolveQuery,
    pokemons: pokemon.resolveMany
  },
  Pokemon: {
    types: pokemon.resolveTypes
  }
};

export default resolvers;
