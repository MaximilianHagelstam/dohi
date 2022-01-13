import cors from 'cors';
import express from 'express';
import session from 'express-session';
import helmet from 'helmet';
import morgan from 'morgan';
import passport from 'passport';
import connectDb from './config/connectDb';
import { __prod__ } from './config/constants';
import configPassport from './config/passport';
import indexRoutes from './routes/indexRoutes';

void connectDb();

configPassport();

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());

app.set('trust proxy', 1);

const ONE_DAY_MILLIS = 24 * 60 * 60 * 1000;

app.use(
  session({
    secret: 'balls',
    resave: true,
    saveUninitialized: true,
    cookie: {
      sameSite: __prod__ ? 'none' : 'lax',
      secure: __prod__,
      maxAge: ONE_DAY_MILLIS,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRoutes);

export default app;
