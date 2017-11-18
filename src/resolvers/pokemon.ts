import getPokemon from '../repository/getPokemon';
import range from '../utils/range';

interface IGetPokemon {
  name?: string;
  id?: number;
}

interface IGetPokemonMany {
  start: number;
  end: number;
}

export const resolveQuery = (obj, { name, id }: IGetPokemon, { loaders }) =>
  loaders.pokemon.load(name || id);

export const resolveTypes = ({ types }: { types: any[] }) =>
  types.map(data => data.type.name);

export const resolveSprites = ({ sprites }) => ({
  default: sprites.front_default,
  shiny: sprites.front_shiny
});

export const resolveMany = (
  obj,
  { start, end }: IGetPokemonMany,
  { loaders }
) => loaders.pokemon.loadMany(range(start, end));
