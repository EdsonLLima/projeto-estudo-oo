import { Cliente } from "./Cliente.js";

export class ContaCorrente {
  //Atributo estatico da classe
  static numeroDeContas = 0; 
  agencia;

  //#saldo = 0
  _saldo = 0; //privado
  _cliente;

  //Metodos acessores SET | GET
  get saldo() {
    return this._saldo;
  }

  get cliente() {
    return this._cliente;
  }

  set cliente(novoValor) {
    if (novoValor instanceof Cliente) this._cliente = novoValor;
  }

  //metodo - faz alguma coisa
  sacar(valor) {
    if (this._saldo >= valor) {
      //retorna o valor para quem chamou o metodo
      this._saldo -= valor;
      return valor;
    } else {
      console.log("valor insuficiente para saque");
    }
  }

  constructor(cliente, agencia) {
    this.agencia = agencia;
    //usando o acessor do GET no lugar do _cliente
    this.cliente = cliente;
    // atributo statico que vai ser somando a cada novo cliente criado
    ContaCorrente.numeroDeContas += 1;
  }

  depositar(valor) {
    if (valor <= 0) {
      return;
    }
    this._saldo += valor;
  }

  transferir(valor, conta) {
    const valorSacado = this.sacar(valor);
    conta.depositar(valorSacado);
  }
}
