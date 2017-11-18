const schema: string = `
  type Pokemon {
    name: String
    types: [String]
  }

  type Query {
    pokemon(name: String): Pokemon
  }
`;

export default schema;
