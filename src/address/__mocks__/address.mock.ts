import { cityEntityMock } from '../../../src/city/__mocks__/city.mock';
import { userEntityMock } from '../../../src/user/__mocks__/user.mock';
import { AddressEntity } from '../entities/address.entity';

export const addressEntityMock: AddressEntity = {
  cep: '43253252',
  cityId: cityEntityMock.id,
  complement: 'llkdfja',
  createdAt: new Date(),
  id: 57546,
  numberAddress: 654,
  updatedAt: new Date(),
  userId: userEntityMock.id,
};
