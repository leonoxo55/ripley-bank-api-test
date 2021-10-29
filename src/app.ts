import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import bankRoutes from './routes/bank';
import authRoutes from './routes/auth';

const app: Application = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/api/bank', bankRoutes);
app.use('/api/auth', authRoutes);

export default app;