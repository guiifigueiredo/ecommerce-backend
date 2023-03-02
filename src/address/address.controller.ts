import {
  Controller,
  Param,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Roles } from '../decoratos/roles.decoratos';
import { UserId } from '../decoratos/user-id.decoratos';
import { UserType } from '../user/enum/user-type';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dtos/createAddress.dto';
import { AddressEntity } from './entities/address.entity';

@Roles(UserType.User)
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createAddress(
    @Body() createAddressDto: CreateAddressDto,
    @UserId() userId: number,
  ): Promise<AddressEntity> {
    return this.addressService.createAddress(createAddressDto, userId);
  }
}
