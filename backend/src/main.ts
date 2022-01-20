// Arquivo Raiz

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // é pela NestFactory de podemos fazer uma aplicação
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
