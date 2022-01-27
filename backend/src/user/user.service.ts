import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
// 7°) Importando o CreateUserDto e o PrismaService...
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';
// 21°) Importando o USER...
import { User } from '@prisma/client';
// 25°) Importando o UserDto...
import { UserDto } from './dto/user.dto';

// 10°) Use: 'npm i bcrypt' e o 'npm i -D @types/bcrypt' para pacotes de criptografia e fazer a importação...
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  // 8°) Criando um construtor com o PrismaService...
  constructor(private prismaService: PrismaService) {}

  // 9°) Método create...(verifique se model se têm um unique)
  async create(createUserDto: CreateUserDto): Promise<User> {
    // se ele achar um usuário, vai retornar o usuário...
    // se ele não achar nada, a variável vai ser undefind...
    const userEmailExists = await this.prismaService.user.findUnique({
      where: { email: createUserDto.email },
    });

    if (userEmailExists) {
      throw new ConflictException('Email já cadastrado');
    }

    if (createUserDto.password !== createUserDto.passwordConfirmation) {
      throw new ConflictException('Senhas digitadas não conferem');
    }

    delete createUserDto.passwordConfirmation;

    // 11°) Criptografia da senha criada pelo usuário...
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    // 12°) Criando um user com a senha criptografada e colocando no banco de dados...
    const createdUser = await this.prismaService.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });

    delete createdUser.password;

    return createdUser;
  }

  // 19°) Método findMany...
  async findMany(): Promise<UserDto[]> {
    const users = await this.prismaService.user.findMany({
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        imageUrl: true,
        createAt: true,
        updateAt: true,
      },
    });
    return users;
  }

  // 27°) Método findUnique...
  async findUnique(userId: string): Promise<User> {
    const userFinded = await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userFinded) {
      throw new NotFoundException('Usuário não encontrado');
    }
    delete userFinded.password;
    return userFinded;
  }

  // 29°) Método update...
  async update(userId: string) {
    const userFinded = await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!userFinded) {
      throw new NotFoundException('Usuário não foi encontrado');
    }

    // foi criado o arquivo create-user.dtp.ts

  }
}
