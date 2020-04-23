import { Router } from 'express';
import CreateUserService from '../services/UserService/Create';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  const { username, password, security_pharse, is_active } = request.body;
  const createUser = new CreateUserService();

  const user = await createUser.execute({
    username,
    password,
    security_pharse,
    is_active,
  });
  return response.json({ user });
});

export default usersRouter;
