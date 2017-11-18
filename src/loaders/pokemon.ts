import * as Dataloader from 'dataloader';
import getPokemon from '.././repository/getPokemon';

const pokemonLoader = new Dataloader(names =>
  Promise.all(names.map(getPokemon))
);

export default pokemonLoader;
