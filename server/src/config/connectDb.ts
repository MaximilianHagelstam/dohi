import { createConnection } from 'typeorm';
import AppUser from '../entities/AppUser';
import Assignment from '../entities/Assignment';
import { DB_URL, __prod__ } from './constants';
import logger from './logger';

const connectDb = async () => {
  try {
    await createConnection({
      type: 'postgres',
      url: DB_URL,
      logging: !__prod__,
      synchronize: !__prod__,
      entities: [AppUser, Assignment],
    });
    logger.info('Connected to database');
  } catch (err) {
    logger.error(`Error connecting to db: ${err}`);
  }
};

export default connectDb;
