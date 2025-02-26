// // import {config} from 'dotenv';
// //
// // config({ path: `config/.env.development.local` });
// // //config({path: `.env.${process.env.NODE_ENV || `development`}.local`});
// //
// // export const { PORT } = process.env;
// // //export const {PORT, NODE_ENV} = process.env;
//
// import { config } from 'dotenv';
//
// // Determine environment (default to 'development' if NODE_ENV is not set)
// const NODE_ENV = process.env.NODE_ENV || 'development';
//
// // Load the appropriate .env file
// config({ path: `config/.env.${NODE_ENV}.local` });
//
// console.log(`Environment: ${NODE_ENV}`); // Debugging log to check which env is loaded
//
// export const { PORT } = process.env;
import { config } from 'dotenv';

const NODE_ENV = process.env.NODE_ENV || 'development';
config({ path: `config/.env.${NODE_ENV}.local` });

console.log(`Environment: ${NODE_ENV}`); // Debugging
export const { PORT } = process.env;
