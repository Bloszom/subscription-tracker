// import {config} from 'dotenv';
//
// config({path:`.env.${process.env.NODE_ENV || 'development'}.local`});
//
// export const {PORT, NODE_ENV, DB_URI} = process.env;
import { config } from 'dotenv';

export const NODE_ENV = process.env.NODE_ENV || 'development';
config({ path: `config/.env.${NODE_ENV}.local` });

console.log(`Environment: ${NODE_ENV}`); // Debugging
export const { PORT, DB_URI } = process.env;
