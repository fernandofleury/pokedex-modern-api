const schema: string = `
  type Pokemon {
    id: Int
    name: String
    types: [String]
    weigth: String
  }

  type Query {
    pokemon(name: String, id: Int): Pokemon
    pokemons(start: Int, end: Int): [Pokemon]
  }
`;

export default schema;
