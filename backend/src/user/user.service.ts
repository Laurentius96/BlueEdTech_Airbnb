import { ConflictException, Injectable } from '@nestjs/common';
// 7°) Importando o CreateUserDto e o PrismaService...
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

// 10°) Use: 'npm i bcrypt' e o 'npm i -D @types/bcrypt' para pacotes de criptografia e fazer a importação...
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  // 8°) Criando um construtor com o PrismaService...
  constructor(private prismaService: PrismaService) {}

  // 9°) Método create...(verifique se model se têm um unique)
  async create(createUserDto: CreateUserDto) {
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

    // 12°) Criando um user com a senha criptografada que irá para o banco...
    const createdUser = await this.prismaService.user.create({
      data: {
        ...createUserDto,
        password: hashedPassword,
      },
    });
    return createdUser;
  }
}
