// 1°) DTO é sempre a representação que você irá receber na entrada...
export class CreateUserDTO {
  id: string;
  name: string;
  email: string;
  phone: number;
  birthday: string;
  password: string;
  passwordConfirm: string;
}
