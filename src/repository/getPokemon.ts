import fetch, { Body } from 'node-fetch';
import { API } from '../config';
import normalizePokemon from './normalizePokemon';
import { IPokemon, IPokemonResponse } from '../types/pokemon';

const getPokemon = async (id: number): Promise<IPokemon> => {
  const req: Body = await fetch(`${API}/pokemon/${id}`);
  const res: IPokemonResponse = await req.json();

  return normalizePokemon(res);
};

export default getPokemon;
