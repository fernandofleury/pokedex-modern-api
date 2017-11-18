import getPokemon from '.././repository/getPokemon';

const resolver = ({ name }: { name: string }) => getPokemon(name);

export default resolver;
