import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import User from '../../models/User';

import AppError from '../../errors/AppError';

interface Request {
  username: string;
  password: string;
  security_pharse: string;
  is_active: boolean;
}

class CreateUserService {
  public async execute({
    username,
    password,
    security_pharse,
    is_active,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);
    const checkUserExist = await usersRepository.findOne({
      where: { username },
    });

    if (checkUserExist) throw new AppError('username already is used.');

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      username,
      security_pharse,
      is_active,
      password: hashedPassword,
    });

    await usersRepository.save(user);
    delete user.security_pharse;
    delete user.password;
    return user;
  }
}

export default CreateUserService;
