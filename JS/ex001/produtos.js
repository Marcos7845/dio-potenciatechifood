/*const nomeDoProfessor = 'Renan Johannsen de Paula';

nomeDoProfessor = 'Vitor Johansen Guerra';
console.log(nomeDoProfessor);*/

//const quantidadeGolpes = 8;

// TODO: Defina aqui os tipos de minerais Carvao, Ferro, Diamante e Pedra
//let minerais = [ 'Pedra','Carvao','Ferro','Diamante',];

// Loop para cada golpe, de 1 até a quantidade informada
//for (let i = 1; i <= quantidadeGolpes; i++) {
// Calcula o índice do mineral usando o operador de módulo (%) para garantir que o índice esteja dentro do tamanho do array
////let minaIndex = (i % minerais.length);

// TODO: Agora exiba o índice i, concatene com o caractere ":", após, concatene com tipo de minerais[minaIndex]:
//console.log((i)+':'+(minerais[minaIndex]));
//}
//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.



// // TODO: Crie uma função ou outro conceito de lógica de programação para realizar o combate e retornar o resultado:
// function combate (jogadaPersonagem, jogadaMonstro)  {
//   // Lê a jogada do personagem:
// var jogadaPersonagem = 1;

// // Lê a jogada do monstro:
// var jogadaMonstro = 3;
// //TODO: Implemente uma estrutura condicional if/else para verificar a jogada do personagem e a jogada do monstro, prossiga: 
//   if (jogadaPersonagem > jogadaMonstro) {
//     return( "Você venceu a batalha!");
//   } else if (jogadaMonstro>jogadaPersonagem){
//    return ("Você perdeu!");
//   } else{
   
//    return("Foi um empate!")
//   } 
//   console.log(jogadaMonstro, jogadaPersonagem)
// }


// var resultado = combate();
// console.log(resultado);

const tipoMagia = ('defesa');

// Solicita ao usuário a quantidade de vezes que a magia será usada
const quantidade = 2;

// Obtem a mensagem correspondente ao tipo de magia
const mensagem = obterMensagem(tipoMagia);


//TODO: Crie uma função ou outra estrutura condicional para retornar a mensagem correspondente ao tipo de magia:
function obterMensagem(){

// Criamos um objeto 'mensagens' para mapear os tipos de magia para mensagens correspondentes.
  const mensagens = {
    ataque: "Usou magia de ataque!",
    cura: "Usou magia de cura!",
    defesa: "Usou magia de defesa!",
    invalido: "Tipo de magia inválido!"
  };
// Aqui fica o retorno da função com a mensagem associada ao tipo de magia fornecido:
  return mensagens[tipoMagia] || mensagens.invalido;
}
// É impresso a mensagem a quantidade de vezes especificada:
for (let i = 0; i < quantidade; i++) {
console.log(mensagem);
console.log(quantidade);
console.log(mensagem)
}