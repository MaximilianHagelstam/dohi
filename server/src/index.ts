import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import { createConnection } from 'typeorm';
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
  PORT,
  __prod__,
} from './config/constants';
import logger from './config/logger';
import { User } from './entities/User';

const main = async () => {
  await createConnection({
    type: 'postgres',
    host: DB_HOST,
    port: DB_PORT,
    database: DB_NAME,
    username: DB_USERNAME,
    password: DB_PASSWORD,
    logging: !__prod__,
    synchronize: !__prod__,
    entities: [User],
  });

  const app = express();

  app.use(express.json());
  app.use(morgan('tiny'));
  app.use(helmet());
  app.use(cors());

  app.listen(PORT, () => {
    logger.info(`Server running in ${process.env.NODE_ENV} on port ${PORT}`);
  });
};

main().catch((err) => {
  logger.error(err);
});
