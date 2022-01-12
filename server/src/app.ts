import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import personRouter from './routes/personRoutes';
import connectDb from './utils/connectDb';

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(helmet());
app.use(cors());

void (async () => {
  await connectDb();
})();

app.use('/api/persons', personRouter);

export default app;
