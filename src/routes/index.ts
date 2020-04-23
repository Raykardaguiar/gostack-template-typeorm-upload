import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

import ensureMidleware from '../middlewares/ensureSession';

const routes = Router();

routes.use('/user', ensureMidleware, usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
