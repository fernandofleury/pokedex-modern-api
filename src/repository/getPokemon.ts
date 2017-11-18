import fetch, { Body } from 'node-fetch';

interface IPokemon {
  name: string;
  types: string[];
}

const getPokemon = async (name: string): Promise<IPokemon> => {
  const req: Body = await fetch(
    `${process.env.API}/pokemon/${name.toLowerCase()}`
  );

  return req.json();
};

export default getPokemon;
