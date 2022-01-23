import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
// 4°) Importando o módulo do Prisma Service...
import { PrismaService } from 'src/prisma.service';

// 5°) Add o PrismaService nas providers...
@Module({
  controllers: [UserController],
  providers: [UserService, PrismaService],
})
export class UserModule {}
