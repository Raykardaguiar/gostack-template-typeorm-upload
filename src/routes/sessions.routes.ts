import { Router } from 'express';
import CreateSessionService from '../services/SessionService/Create';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { username, password } = request.body;
  const sessionUser = new CreateSessionService();

  const user = await sessionUser.execute({
    username,
    password,
  });

  return response.json(user);
});

export default sessionsRouter;
