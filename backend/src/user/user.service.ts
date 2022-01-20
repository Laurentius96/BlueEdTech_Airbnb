import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
// 2°) Importar o DTO...
import { CreateUserDTO } from './dto/create-user.dto';

@Injectable()
export class UserService {
  // 3°) Criando o "Banco de Dados", iniciaizando com "= []"...
  private bancoDeDados: CreateUserDTO[] = [];

  // 4°) Criando o método CREATE...
  create(user: CreateUserDTO) {
    // se uma senha não bater com a confirmação, pode cadastrar o usuário...
    if (user.password !== user.passwordConfirm) {
      // Olhar a documentação do nest - exception filters
      // Ou olhar no https://http.cat/
      // Importar - linha 1
      throw new UnauthorizedException('Senhas digitadas não são compatíveis');
    }
    this.bancoDeDados.push(user);
    // Fazendo que o retorno não leve a senha...
    const auxbancoAuxiliar = this.bancoDeDados.map((user) => ({
      nome: user.name,
      email: user.email,
      phone: user.phone,
    }));
    return this.bancoDeDados;
  }

  // 7°) Criando uma forma de achar o user pelo ID...
  read(id: string) {
    const encontrei = this.bancoDeDados.find((user) => user.id === id);
    {
      if (!encontrei) {
        throw new NotFoundException('Usuário não encontrado');
      }
      return encontrei;
    }
  }
}
