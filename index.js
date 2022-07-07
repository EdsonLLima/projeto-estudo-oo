import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//isntanciando uma classe
const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const Conta1 = new ContaCorrente(1001, cliente1);

const Conta2 = new ContaCorrente(cliente2, 1001);

console.log(Conta1);
console.log(Conta2);
