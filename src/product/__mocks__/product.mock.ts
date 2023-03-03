import { categoryMock } from 'src/category/__mocks__/category.mock';
import { ProductEntity } from '../entities/product.entity';

export const productMock: ProductEntity = {
  id: 32,
  categoryId: categoryMock.id,
  image: 'http:imagem',
  name: 'testeProduct',
  price: 342,
  updatedAt: new Date(),
  createdAt: new Date(),
};
