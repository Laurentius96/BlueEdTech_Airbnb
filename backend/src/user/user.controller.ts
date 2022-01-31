import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
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
// 70°) Após colocar o UseGuards na importação acima linha 1, importamos o UseGuard...
import { AuthGuard } from '@nestjs/passport';
// 75°) Importando LoggedUser...
import { LoggedUser } from 'src/auth/logged-user.decorator';
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
  // 71°) Add o @UseGuards(AuthGuard())...
  @UseGuards(AuthGuard())
  // 26°) Add o {UserDto}...
  findMany(): Promise<UserDto[]> {
    return this.userService.findMany();
  }

  // 28°)
  @Get(':id')
  // 72°) Add o @UseGuards(AuthGuard())...
  @UseGuards(AuthGuard())
  findUnique(@Param('id') userId: string): Promise<User> {
    return this.userService.findUnique(userId);
  }

  // 34°)
  // 76°) Retiramos o id do @Patch(':id')...
  @Patch()
  // 73°) Add o @UseGuards(AuthGuard())...
  @UseGuards(AuthGuard())
  update(
    // 77°) Deletamos o "@Param('id') userId: string," e colocamos no lugar o '@LoggedUser() user: User'
    @LoggedUser() user: User,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<User> {
    // 78°) Trocamos o 'userId' detrono dos () por 'user.id'
    return this.userService.update(user.id, updateUserDto);
  }

  // 36°)
  // 79°) Retiramos o id do @Delete(':id')...
  @Delete()
  // 80°) Add o @UseGuards(AuthGuard())...
  @UseGuards(AuthGuard())
  // 81°) Retiramos o "@Param('id') userId: string," dentro () e colocamos no lugar o '@LoggedUser() user: User'
  delete(@LoggedUser() user: User) {
    // 82°) Trocamos o 'userId' detrono dos () por 'user.id'
    return this.userService.delete(user.id);
  }
}
