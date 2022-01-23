// 17°)
import {
  IsString,
  IsEmail,
  IsNotEmpty,
  MinLength,
  IsUrl,
} from 'class-validator';

//  6°) Após criar a pasta dto, vamos exportar o CreateUserDto...
// Uma representação do json que estou esperando receber...
export class CreateUserDto {
  // Usar o mesmo nome usado no model - (schema.prisma)...
  // 18°) Add as validações (@...)
  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;
  
  @IsString()
  @IsNotEmpty()
  @MinLength(6, { message: 'A senha deve ter 6 ou mais dígitos'})
  password: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  passwordConfirmation: string;

  @IsNotEmpty()
  @IsUrl()
  imageUrl: string;
}
