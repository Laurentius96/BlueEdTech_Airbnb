import { Controller, Post, Body, Get, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
// 51°) Importando...
import { LoginInputDto } from './dto/login-input.dto';
// 56°)
import { LoginResponseDto } from './dto/login-response.dto';
// 58°)
import { Request } from 'express';
// 59°) Após colocar o UseGuard na importação...
import { AuthGuard } from '@nestjs/passport';
// 65°) Importando o LoggedUser...
import { LoggedUser } from './logged-user.decorator';
// 67°) Importando o User...
import { User } from '@prisma/client';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // 52°) Criando a rota...
  @Post()
  login(@Body() loginInputDto: LoginInputDto): Promise<LoginResponseDto> {
    return this.authService.login(loginInputDto);
  }

  // 57°)
  @Get()
  // 60°) Colocando o UseGuards...
  @UseGuards(AuthGuard())
  // 66°)
  me(@LoggedUser() user: User) {
    return user;
  }
}
