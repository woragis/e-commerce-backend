import dotenv from 'dotenv';
const env: string = process.env.NODE_ENV || 'development';
dotenv.config({ path: 'src/config/.env.' + env });
import { CorsOptions } from 'cors';

const corsOptions: CorsOptions = {
  origin: process.env.CORS_ORIGIN ? process.env.CORS_ORIGIN.split(',') : [],
  allowedHeaders: process.env.CORS_ALLOWED_HEADERS ? process.env.CORS_ALLOWED_HEADERS.split(',') : [],
  credentials: Boolean(process.env.CORS_CREDENTIALS) || true,
  exposedHeaders: process.env.CORS_EXPOSED_HEADERS ? process.env.CORS_EXPOSED_HEADERS.split(',') : [],
  maxAge: Number(process.env.CORS_MAX_AGE) || 600,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  optionsSuccessStatus: Number(process.env.CORS_OPTIONS_SUCCESS_STATUS) || 204,
  preflightContinue: Boolean(process.env.CORS_PREFLIGHT_CONTINUE) || false,
};

export default corsOptions;
