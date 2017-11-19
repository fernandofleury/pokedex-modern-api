import { SEED_LOCATION, SEED_REQUEST_DELAY, POKEMON_COUNT } from '../config';
import * as fs from 'fs';
import * as delay from 'delay';
import getPokemon from '../repository/getPokemon';
import range from '../utils/range';
import { IPokemon } from '../types/pokemon';

const makeRequest = async (id: number) => {
  await delay(SEED_REQUEST_DELAY);
  process.stdout.write(`generating seed for pokemonId: ${id} \n`);
  return getPokemon(id);
};

function* requestGenerator(final: number) {
  let id = 1;
  while (id <= final) {
    yield makeRequest(id++);
  }
}

const runSeed = async () => {
  const mappedResults = {};

  for (const response of requestGenerator(POKEMON_COUNT)) {
    const result: IPokemon = await response;
    mappedResults[result.id] = result;
  }

  return fs.writeFileSync(SEED_LOCATION, JSON.stringify(mappedResults), 'utf8');
};

export default runSeed();
