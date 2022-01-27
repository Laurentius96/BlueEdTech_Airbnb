import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
// 13°)Importando o CreateUserDto...
import { CreateUserDto } from './dto/create-user.dto';
// 22°) Importando o User...
import { User } from '@prisma/client';
// 25°) Importando o UserDto...
import { UserDto } from './dto/user.dto';
// 33°) Importando o UpdateUserDato...
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // 14°) Criando o método Create...
  @Post()
  //23°) Atualizando o com o :Promise<User>...
  create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  // 20°) Criando mais um método...
  @Get()
  // 26°) Add o {UserDto}...
  findMany(): Promise<UserDto[]> {
    return this.userService.findMany();
  }

  // 28°)
  @Get(':id')
  findUnique(@Param('id') userId: string): Promise<User> {
    return this.userService.findUnique(userId);
  }

  // 34°)
  @Patch(':id')
  update(
    @Param('id') userId: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    return this.userService.update(userId, updateUserDto);
  }

  // 36°)
  @Delete(':id')
  delete(@Param('id') userId: string) {
    return this.userService.delete(userId);
  }
}
