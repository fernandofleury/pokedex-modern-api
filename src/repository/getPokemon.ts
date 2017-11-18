import fetch, { Body } from 'node-fetch';
import { API } from '../config';

interface IPokemon {
  name: string;
  types: string[];
}

const getPokemon = async (arg: string | number): Promise<IPokemon> => {
  const req: Body = await fetch(`${API}/pokemon/${arg}`);

  return req.json();
};

export default getPokemon;
