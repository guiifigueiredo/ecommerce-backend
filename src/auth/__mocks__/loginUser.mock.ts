import { userEntityMock } from '../../../src/user/__mocks__/user.mock';
import { LoginDto } from '../dtos/login.dtos';

export const loginUserMock: LoginDto = {
  email: userEntityMock.email,
  password: '123',
};
