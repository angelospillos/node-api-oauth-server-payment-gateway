import express from 'express';
import { apiRouter } from './v1';

export const rootRouter = express.Router();
rootRouter.use('/v1', apiRouter);