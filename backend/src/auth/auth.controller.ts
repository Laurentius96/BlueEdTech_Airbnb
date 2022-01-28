import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
// 51°) Importando...
import { LoginInputDto } from './dto/login-input.dto';
// 56°)
import { LoginResponseDto } from './dto/login-response.dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // 52°) Criando a rota...
  @Post()
  login(@Body() loginInputDto: LoginInputDto): Promise<LoginResponseDto> {
    return this.authService.login(loginInputDto);
  }
}
