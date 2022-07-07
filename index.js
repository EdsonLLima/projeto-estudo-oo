import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//isntanciando uma classe
const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const Conta1 = new ContaCorrente(cliente1, 1001);
Conta1.depositar(500);

const Conta2 = new ContaCorrente(cliente2, 1001);

Conta1.transferir(200, Conta2);

console.log(ContaCorrente.numeroDeContas);
