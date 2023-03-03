import { Controller, Get } from '@nestjs/common';
import { Roles } from 'src/decoratos/roles.decoratos';
import { UserType } from 'src/user/enum/user-type';
import { ReturnProductDto } from './dtos/returnProduct.dto';
import { ProductService } from './product.service';

@Roles(UserType.User, UserType.Admin)
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<ReturnProductDto[]> {
    return (await this.productService.findAll()).map(
      (product) => new ReturnProductDto(product),
    );
  }
}
