declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'dev' | 'prod' | 'test';
    PORT: number;
    MONGO_DB_URI: string;
    REDIS_PASSWORD: string;
    REDIS_SOCKET_HOST: string;
    REDIS_SOCKET_PORT: number;
    SESSION_SECRET: string;
    SESSION_COOKIE_SECURE: boolean;
    SESSION_COOKIE_HTTP_ONLY: boolean;
    SESSION_COOKIE_MAX_AGE: number;
    CORS_ORIGIN: string;
    CORS_ALLOWED_HEADERS: string;
    CORS_CREDENTIALS: boolean;
    CORS_EXPOSED_HEADERS: string;
    CORS_MAX_AGE: number;
    CORS_OPTIONS_SUCCESS_STATUS: number;
    CORS_PREFLIGHT_CONTINUE: boolean;
  }
}
