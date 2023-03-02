import { UserEntity } from '../entities/user.entity';
import { UserType } from '../enum/user-type';

export const userEntityMock: UserEntity = {
  cpf: '12143124',
  createdAt: new Date(),
  email: 'emailmock@email.com',
  id: 324,
  name: 'nameMock',
  password: '123',
  phone: '3414134',
  typeUser: UserType.User,
  updatedAt: new Date(),
};
