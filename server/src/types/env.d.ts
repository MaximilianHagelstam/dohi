declare namespace NodeJS {
  export interface ProcessEnv {
    PORT: number;
    CLIENT_URL: string;
    SESSION_SECRET: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    GOOGLE_CALLBACK_URL: string;
    DB_URL_DEV: string;
    DB_URL_PROD: string;
  }
}
