class Cliente {
  //atributo, propriedades, campos, isso no jpava script : seria uma variavel
  nome;
  cpf;
}

class ContaCorrent {
  agencia;
  saldo;
}

//isntanciando uma classe
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

console.log(cliente1);
console.log(cliente2);
