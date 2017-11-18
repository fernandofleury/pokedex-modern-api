const schema: string = `
  type Sprite {
    default: String
    shiny: String
  }

  type Pokemon {
    id: Int
    name: String
    types: [String]
    weight: Int
    sprites: Sprite
  }

  type Query {
    pokemon(name: String, id: Int): Pokemon
    pokemons(start: Int, end: Int): [Pokemon]
  }
`;

export default schema;
