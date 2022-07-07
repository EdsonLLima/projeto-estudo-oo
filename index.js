import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//isntanciando uma classe
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

// const cliente2 = new Cliente();
// cliente2.nome = "Alice";
// cliente2.cpf = 88822233309;

const Conta1 = new ContaCorrente();
Conta1.agencia = 1001;
Conta1.cliente = cliente1;
Conta1.depositar(500);

const Conta2 = new ContaCorrente();
Conta2.cliente = new Cliente();
Conta2.cliente.nome = "Alice";
Conta2.cliente.cpf = 88822233309;
Conta2.agencia = 1001;

Conta1.transferir(200, Conta2);

console.log(Conta1);
console.log(Conta2);
