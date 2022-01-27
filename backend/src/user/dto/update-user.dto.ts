// 30°)
import {
  IsString,
  IsEmail,
  IsUrl,
  IsNotEmpty,
  IsOptional,
} from 'class-validator';
export class UpdateUserDto {

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsEmail()  
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()  
  firstName: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()  
  lastName: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @IsUrl()  
  imageUrl: string;
}
