export class User {
  id: number;
  nome: string;
  email: string;

  constructor(id, nome, email) {
    this.id = id;
    this.nome = nome;
    this.email = email;
  }
}
