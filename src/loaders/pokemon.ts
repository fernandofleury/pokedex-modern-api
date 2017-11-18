import * as Dataloader from 'dataloader';
import getPokemon from '.././repository/getPokemon';

const pokemonLoader = new Dataloader(args => Promise.all(args.map(getPokemon)));

export default pokemonLoader;
