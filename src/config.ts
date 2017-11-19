import * as dotenv from 'dotenv';
dotenv.config();

export const PORT: string = process.env.PORT || '4000';
export const GRAPHIQL: boolean = !!process.env.GRAPHIQL;
export const API: string = process.env.API;
export const SEED_LOCATION: string = process.env.SEED_LOCATION;
export const POKEMON_COUNT: number = parseInt(process.env.POKEMON_COUNT, 0);
