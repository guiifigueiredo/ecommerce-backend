import { UserEntity } from '../entities/user.entity';

export class ReturnUserDto {
  name: string;
  email: string;
  phone: string;
  cpf: string;

  constructor(userEntity: UserEntity) {
    this.name = userEntity.name;
    this.email = userEntity.email;
    this.phone = userEntity.phone;
    this.cpf = userEntity.cpf;
  }
}
