import { createConnection } from 'typeorm';
import Assignment from '../entities/Assignment';
import User from '../entities/User';
import {
  DB_HOST,
  DB_NAME,
  DB_PASSWORD,
  DB_PORT,
  DB_USERNAME,
  __prod__,
} from './constants';
import logger from './logger';

const connectDb = async () => {
  try {
    await createConnection({
      type: 'postgres',
      host: DB_HOST,
      port: DB_PORT,
      database: DB_NAME,
      username: DB_USERNAME,
      password: DB_PASSWORD,
      logging: !__prod__,
      synchronize: !__prod__,
      entities: [User, Assignment],
    });

    logger.info(`Connected to database ${DB_NAME}`);
  } catch (err) {
    logger.error(`Error connecting to db: ${err}`);
  }
};

export default connectDb;
