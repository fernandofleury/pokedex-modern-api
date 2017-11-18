import getPokemon from '.././repository/getPokemon';

export const resolveQuery = (obj, { name }: { name: string }, { loaders }) =>
  loaders.pokemon.load(name);
export const resolveTypes = ({ types }: { types: any[] }) =>
  types.map(data => data.type.name);
