import * as dotenv from 'dotenv';
dotenv.config();

export const PORT: string = process.env.PORT || '4000';
export const GRAPHIQL: boolean = !!process.env.GRAPHIQL;
export const API: string = process.env.API;
