import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from '../user/dtos/createUser.dtos';
import { ReturnUserDto } from './dtos/returnUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @UsePipes(ValidationPipe)
  @Post()
  async createUser(@Body() createUser: CreateUserDto) {
    return this.userService.createUser(createUser);
  }

  @Get()
  async getAllUsers(): Promise<ReturnUserDto[]> {
    return (await this.userService.getUsers()).map(
      (userEntity) => new ReturnUserDto(userEntity),
    );
  }

  @Get('/:userId')
  async getUserById(@Param('userId') userId: number): Promise<ReturnUserDto> {
    return new ReturnUserDto(
      await this.userService.getUserByIdUsingReferences(userId),
    );
  }
}
