import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//isntanciando uma classe
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const Conta1 = new ContaCorrente();
Conta1.agencia = 1001;
Conta1.cliente = cliente1;

const Conta2 = new ContaCorrente();
Conta2.cliente = cliente1;
Conta2.agencia = 1001;

console.log(Conta2.cliente);
