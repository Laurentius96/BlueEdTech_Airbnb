//  6°) Após criar a pasta dto, vamos exportar o CreateUserDto...
// Uma representação do json que estou esperando receber...
export class CreateUserDto {
  // Usar o mesmo nome usado no model - (schema.prisma)...
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  passwordConfirmation: string;
  imageUrl: string;
}
