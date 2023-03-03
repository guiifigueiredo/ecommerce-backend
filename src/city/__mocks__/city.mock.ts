import { stateEntityMock } from '../../../src/state/__mocks__/state.mock';
import { CityEntity } from '../entities/city.entity';

export const cityEntityMock: CityEntity = {
  id: 34,
  stateId: stateEntityMock.id,
  name: 'testeCidade',
  createdAt: new Date(),
  updatedAt: new Date(),
};
