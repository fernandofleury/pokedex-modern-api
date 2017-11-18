import getPokemon from '.././repository/getPokemon';

export const resolveQuery = (obj, { name }: { name: string }) =>
  getPokemon(name);
export const resolveTypes = ({ types }: { types: any[] }) =>
  types.map(data => data.type.name);
