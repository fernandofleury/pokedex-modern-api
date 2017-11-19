import * as pokemon from './pokemon';

const resolvers = {
  Query: {
    pokemon: pokemon.resolveQuery,
    pokemons: pokemon.resolveMany
  }
};

export default resolvers;
