import fetch, { Body } from 'node-fetch';

interface IGetPokemonResponse {
  name: string;
  types: any[];
}

interface IPokemon {
  name: string;
  types: string[];
}

const getPokemon = async (name: string): Promise<IPokemon> => {
  const req: Body = await fetch(
    `${process.env.API}/pokemon/${name.toLowerCase()}`
  );
  const res: IGetPokemonResponse = await req.json();

  return {
    name: res.name,
    types: res.types.map(data => data.type.name)
  };
};

export default getPokemon;
