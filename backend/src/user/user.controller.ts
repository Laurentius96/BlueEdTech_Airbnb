import { Body, Controller, Post,} from '@nestjs/common';
import { UserService } from './user.service';
// 13°)Importando o CreateUserDto...
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 14°) Criando mais um método Create...
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}
