
import { config } from 'dotenv';

export const NODE_ENV = process.env.NODE_ENV || 'development';
config({ path: `config/.env.${NODE_ENV}.local` });

console.log(`Environment: ${NODE_ENV}`); // Debugging
export const { PORT,
    DB_URI,
    JWT_SECRET,
    JWT_EXPIRES_IN,
    ARCJET_ENV,
    ARCJET_KEY,
    QSTASH_URL,
    QSTASH_TOKEN,
    SERVER_URL,
EMAIL_PASSWORD} = process.env;
