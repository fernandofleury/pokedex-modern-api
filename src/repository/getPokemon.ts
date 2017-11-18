import fetch, { Body } from 'node-fetch';

interface IPokemon {
  name: string;
  types: string[];
}

const getPokemon = async (arg: string | number): Promise<IPokemon> => {
  const req: Body = await fetch(`${process.env.API}/pokemon/${arg}`);

  return req.json();
};

export default getPokemon;
