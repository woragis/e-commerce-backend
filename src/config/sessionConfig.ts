import dotenv from 'dotenv';
const env: string = process.env.NODE_ENV || 'development';
dotenv.config({ path: 'src/config/.env.' + env });
import { createClient } from 'redis';
import connectRedis from 'connect-redis';

const redisClient = createClient({
  password: process.env.REDIS_PASSWORD || 'VVJ4TwicsgpYgE6XDUAImZ5nzsogch9w',
  socket: {
    host: process.env.REDIS_SOCKET_HOST || 'redis-11306.c308.sa-east-1-1.ec2.cloud.redislabs.com',
    port: Number(process.env.REDIS_SOCKET_PORT) || 11306,
  },
});

const store = new connectRedis({ client: redisClient });

const sessionOptions = {
  store,
  secret: process.env.SESSION_SECRET || 'woGiveUpBird',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: Boolean(process.env.SESSION_COOKIE_SECURE) || false,
    httpOnly: Boolean(process.env.SESSION_COOKIE_HTTP_ONLY) || true,
    maxAge: Number(process.env.SESSION_COOKIE_MAX_AGE) || 1800000,
  },
};

export default sessionOptions;
