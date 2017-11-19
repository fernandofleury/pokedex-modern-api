import getPokemon from '../repository/getPokemon';
import range from '../utils/range';
export const resolveQuery = (obj, { id }: { id: number }, { loaders }) =>
  loaders.pokemon.load(id);

export const resolveMany = (
  obj,
  { start, end }: { start: number; end: number },
  { loaders }
) => loaders.pokemon.loadMany(range(start, end));
