export class Cliente {
  //atributo, propriedades, campos, isso no jpava script : seria uma variavel
  nome;
  _cpf;

  get cpf() {
    return this._cpf;
  }
  constructor(nome, cpf) {
    this.nome = nome;
    this._cpf = cpf;
  }
}
