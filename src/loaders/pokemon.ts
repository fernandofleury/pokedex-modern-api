import * as fs from 'fs';
import * as Dataloader from 'dataloader';
import { SEED_LOCATION } from '../config';
import getPokemon from '../repository/getPokemon';

let localData = {};

try {
  localData = JSON.parse(fs.readFileSync(SEED_LOCATION, 'utf8'));
} catch (err) {
  localData = {};
}

const pokemonLoader = new Dataloader((ids: number[]) =>
  Promise.all(
    ids.map((id: number) => {
      if (localData[id]) {
        return Promise.resolve(localData[id]);
      }
      return getPokemon(id);
    })
  )
);

export default pokemonLoader;
