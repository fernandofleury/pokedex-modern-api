import getPokemon from '.././repository/getPokemon';

const range = (start: number, end: number): number[] =>
  Array.from({ length: end + 1 - start }, (v, k) => k + start);

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

export const resolveMany = (
  obj,
  { start, end }: IGetPokemonMany,
  { loaders }
) => loaders.pokemon.loadMany(range(start, end));
