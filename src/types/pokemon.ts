export interface IPokemon {
  name: string;
  id: number;
  types: string[];
  sprites: {
    default: string;
    shiny: string;
  };
}

export interface IPokemonResponse {
  name: string;
  id: number;
  types: [
    {
      type: {
        name: string;
      };
      slot: number;
    }
  ];
  sprites: {
    front_default: string;
    front_shiny: string;
  };
}
