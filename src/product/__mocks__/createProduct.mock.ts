import { categoryMock } from 'src/category/__mocks__/category.mock';
import { CreateProductDto } from '../dtos/createProduct.dto';

export const createProductMock: CreateProductDto = {
  categoryId: categoryMock.id,
  name: 'product test',
  price: 1334,
  image: 'urlDaImagem',
};
