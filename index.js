import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";

//isntanciando uma classe
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

// const cliente2 = new Cliente();
// cliente2.nome = "Alice";
// cliente2.cpf = 88822233309;

const ContaCorrenteRicardo = new ContaCorrente();
ContaCorrenteRicardo.agencia = 1001;

ContaCorrenteRicardo.depositar(250);
const valorSacado = ContaCorrenteRicardo.sacar(50);

console.log(valorSacado);
console.log(ContaCorrenteRicardo);
