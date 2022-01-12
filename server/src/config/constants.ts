import dotenv from 'dotenv';

dotenv.config();

export const __prod__ = process.env.NODE_ENV === 'production';

export const PORT = process.env.PORT || 8080;

export const DB_HOST = __prod__
  ? process.env.DB_HOST_PROD
  : process.env.DB_HOST_DEV;

export const DB_PORT = __prod__
  ? parseInt(<string>process.env.DB_PORT_PROD)
  : parseInt(<string>process.env.DB_PORT_DEV);

export const DB_NAME = __prod__
  ? process.env.DB_NAME_PROD
  : process.env.DB_NAME_DEV;

export const DB_USERNAME = __prod__
  ? process.env.DB_USERNAME_PROD
  : process.env.DB_USERNAME_DEV;

export const DB_PASSWORD = __prod__
  ? process.env.DB_PASSWORD_PROD
  : process.env.DB_PASSWORD_DEV;
