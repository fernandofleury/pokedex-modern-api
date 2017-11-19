import { SEED_LOCATION, POKEMON_COUNT } from '../config';
import * as fs from 'fs';
import * as delay from 'delay';
import getPokemon from '../repository/getPokemon';
import range from '../utils/range';

const seed = async () => {
  const results = await Promise.all(
    range(1, 4).map(async id => {
      await delay(500);
      return getPokemon(id);
    })
  );

  const mappedResults = results.reduce((keys, pokemon) => {
    return {
      ...keys,
      [pokemon.id]: pokemon
    };
  }, {});

  return fs.writeFileSync(SEED_LOCATION, JSON.stringify(mappedResults), 'utf8');
};

export default seed();
