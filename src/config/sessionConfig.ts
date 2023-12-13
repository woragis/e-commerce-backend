import dotenv from 'dotenv';
const env: string = process.env.NODE_ENV || 'development';
dotenv.config({ path: 'src/config/.env.' + env });
import session from 'express-session';
import { createClient } from 'redis';
import connectRedis from 'connect-redis';

const redisClient = createClient({
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_SOCKET_HOST,
    port: process.env.REDIS_SOCKET_PORT,
  },
});

const store = new connectRedis({ client: redisClient });

const sessionOptions = {
  store,
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.SESSION_COOKIE_SECURE,
    httpOnly: process.env.SESSION_COOKIE_HTTP_ONLY,
    maxAge: process.env.SESSION_COOKIE_MAX_AGE,
  },
};

export default sessionOptions;
