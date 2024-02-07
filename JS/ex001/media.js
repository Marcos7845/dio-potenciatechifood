/* Algoritimo de média, classificar de acordo com a media se poassou ou nao, menor igual a 5 reprovado, maior que 5 e menor igual a 7 recuperação, maior que 7 aprovado*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 8;

const media = (nota1+nota2+nota3)/3

if(media < 5){
console.log('Você está Reprovado');
} else if(media >= 5 && media<=7){
console.log('Você está de recuperação');
} else{
console.log('Aprovado');
}

console.log(media)

