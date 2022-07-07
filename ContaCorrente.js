export class ContaCorrente {
  agencia;
  cliente;

  //#saldo = 0
  _saldo = 0; //privado

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
