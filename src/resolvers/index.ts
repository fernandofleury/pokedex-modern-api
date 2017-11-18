import * as pokemon from './pokemon';

const resolvers = {
  Query: {
    pokemon: pokemon.resolveQuery,
    pokemons: pokemon.resolveMany
  },
  Pokemon: {
    types: pokemon.resolveTypes,
    sprites: pokemon.resolveSprites
  }
};

export default resolvers;
