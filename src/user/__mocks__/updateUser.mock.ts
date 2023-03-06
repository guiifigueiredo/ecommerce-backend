import { UpdatePasswordDTO } from '../dtos/updatePassword.dto';

export const updatePasswordMock: UpdatePasswordDTO = {
  lastPassword: 'abc',
  newPassword: 'fdsafj',
};

export const updatePasswordInvalidMock: UpdatePasswordDTO = {
  lastPassword: 'lkfdjsa',
  newPassword: 'flkjbla',
};
