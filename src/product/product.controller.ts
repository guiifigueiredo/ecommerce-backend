import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Roles } from 'src/decoratos/roles.decoratos';
import { UserType } from 'src/user/enum/user-type';
import { DeleteResult } from 'typeorm';
import { CreateProductDto } from './dtos/createProduct.dto';
import { ReturnProductDto } from './dtos/returnProduct.dto';
import { UpdateProductDTO } from './dtos/updateProduct.dto';
import { ProductEntity } from './entities/product.entity';
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

  @Roles(UserType.Admin)
  @UsePipes(ValidationPipe)
  @Post()
  async createProduct(
    @Body() createProductDto: CreateProductDto,
  ): Promise<ProductEntity> {
    return this.productService.createProduct(createProductDto);
  }

  @Roles(UserType.Admin)
  @Delete('/:productId')
  async deleteProduct(
    @Param('productId') productId: number,
  ): Promise<DeleteResult> {
    return await this.productService.deleteProduct(productId);
  }

  @Roles(UserType.Admin)
  @Put('/:productId')
  async updateProduct(
    @Body() updateProductDto: UpdateProductDTO,
    @Param() productId: number,
  ): Promise<ProductEntity> {
    return this.productService.updateProduct(updateProductDto, productId);
  }
}
