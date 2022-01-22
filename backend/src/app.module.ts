import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
// 4°) Importando
import { UserService } from 'src/prisma.service';

// Decorator - (@) - permite adicionar um comportamento a um objeto já existente em tempo de execução, ou seja, agrega dinamicamente responsabilidades adicionais a um objeto.
// Vem colcado com seu dono
// Normalmente UMA classe por arquivo
// o Módulo é quem comando
@Module({
  imports: [UserModule],
  controllers: [],
  providers: [UserService],
})
export class AppModule {}
