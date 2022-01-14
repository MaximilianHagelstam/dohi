declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: string;
    CLIENT_URL: string;
    SESSION_SECRET: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    GOOGLE_CALLBACK_URL: string;
    DB_HOST_PROD: string;
    DB_PORT_PROD: string;
    DB_NAME_PROD: string;
    DB_USERNAME_PROD: string;
    DB_PASSWORD_PROD: string;
    DB_HOST_DEV: string;
    DB_PORT_DEV: string;
    DB_NAME_DEV: string;
    DB_USERNAME_DEV: string;
    DB_PASSWORD_DEV: string;
  }
}
