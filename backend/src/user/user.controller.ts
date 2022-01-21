import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { UserService } from './user.service';
// 5°) Importando o DTO...
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 6°)
  @Post()
  create(@Body() user: CreateUserDTO) {
    return this.userService.create(user);
  }

  // 8°)
  @Get(':id')
  read(@Param('id') id: string) {
    return this.userService.read(id);
  }
}
