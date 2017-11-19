import { IPokemon, IPokemonResponse } from '../types/pokemon';

const normalizeData = (data: IPokemonResponse): IPokemon => {
  const normalized = {
    name: data.name,
    id: data.id,
    types: data.types.sort(item => item.slot).map(item => item.type.name),
    sprites: {
      default: data.sprites.front_default,
      shiny: data.sprites.front_shiny
    }
  };

  return normalized;
};

export default normalizeData;
