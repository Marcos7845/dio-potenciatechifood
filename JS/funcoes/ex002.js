/*Criar uma Classe para representasr carros, deve conter marca, uma cor e um gasto medio de comvbistivel por km rodado
 criar um método que dado a quantidade de km e o preço do combustivel nos de o valor gasto em reais para realizar o percurso



class carros {
    marca;
    cor;
    gastoMedioPorKm;

constructor(marca,cor,gastoMedioPorKm){
    this.marca = marca;
    this.cor = cor;
    this.gastoMedioPorKm = 1/gastoMedioPorKm;


    }
calcularViagem(distancia,preco){
    return distancia * this.gastoMedioPorKm * preco;





}
}
const c1 = new carros('toyota', 'prata', 12) 

console.log(c1.calcularViagem(70,5));

const c2 = new carros('fiat', 'preto', 10)
console.log(c2.calcularViagem(70,5)); */

/* Criar uma classe para representar pessoas quie contenha os atributos, nome peso e altura
 as pessoas devem ter a capacidade de dizer o valor do seu IMC
 criar uma instacia pessoa chamada Jose, 70kg e 1,75 de altura e peça ao josé dizer qual é o seu IMC


class pessoa {
    nome;
    peso;
    altura;

constructor(nome,peso,altura){
    this.nome = nome;
    this.peso = peso;
    this.altura= altura;
    
}


calcularIMC(){
return (this.peso/(this.altura*this.altura));
}


classificarIMC(){
if(this.calcularIMC()<=18.5){
    return 'Abaixo do peso';
} else if( this.calcularIMC()> 18.5 && this.calcularIMC() <=25){
    return 'Peso Normal';
}else if (this.calcularIMC()>25 && this.calcularIMC() < 30){
    return 'Acima do peso';
} else if(this.calcularIMC()>=30 && this.calcularIMC()<40){
return 'Obeso'
}else{
    return ('Obesidade grave')
}
}
}
const p1 = new pessoa('Jose', 70, 1.75);
console.log(p1.calcularIMC(this.peso,this.altura));
console.log(p1.classificarIMC(p1.calcularIMC(this.peso,this.altura)));





class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function descreverPessoa(pessoa) {
    console.log(`Nome: ${pessoa.nome}; Idade: ${pessoa.idade};`);
}

const renan = new Pessoa('Renan', 30);
console.log(descreverPessoa(renan));*/

/*criador de tabuada

const numeroTabuada = 3

for (let i = 0; i <= 10; i++) {
   
 
    console.log(numeroTabuada*i);
    console.log(i)

}
*/ 

const bloco =[1,2,3, 5, 6, 8, 10, 11, 13, 15, 16, 18, 19, 20, 22, 23, 26, 27, 28, 29, 30]

for (let i = 0; i < bloco.length; i++) {

    if(bloco[i] % 2 === 0){
        console.log(bloco[i]);

    }
}
   