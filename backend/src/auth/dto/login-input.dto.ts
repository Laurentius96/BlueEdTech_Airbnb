// 42°) Importando...
import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

// 43°) Exportando...
export class LoginInputDto {
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
