// Arquivo Raiz

import { NestFactory } from '@nestjs/core';
// 16°) Importando o ValidationPipe
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';


async function bootstrap() {
  // é pela NestFactory de podemos fazer uma aplicação
  const app = await NestFactory.create(AppModule);

  // 15°) Após usar o comando npm i --save class-validator class-transformer colocamos a linha de coódigo abaixo extraido da documentação: https://docs.nestjs.com/techniques/validation
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();
