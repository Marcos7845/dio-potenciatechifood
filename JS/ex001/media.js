/* Algoritimo de média, classificar de acordo com a media se poassou ou nao, menor igual a 5 reprovado, maior que 5 e menor igual a 7 recuperação, maior que 7 aprovado*/

// const nota1 = 7;
// const nota3 = 8;

// const nota2 = 7;
// const media = (nota1+nota2+nota3)/3

// if(media < 5){
// console.log('Você está Reprovado');
// } else if(media >= 5 && media<=7){
// console.log('Você está de recuperação');
// } else{
// console.log('Aprovado');
// }

// console.log(media)
function calcularImposto(salario) {
    let aliquota;
    if (salario >= 0 && salario <= 1100) {
        aliquota = 0.05;
    }else if (salario>1100 && salario< 2500) {
    aliquota=0.1
    }else{
    aliquota=0.15
    }
    //TODO Criar as demais condições para as aliquotas de 10.00% e 15.00%.
    return aliquota * salario;
}

//Lê os valores de Entrada:
const valorSalario = parseFloat(gets());
const valorBeneficios = parseFloat(gets());

//Calcula o imposto através da função "calcularImposto":
const valorImposto = calcularImposto(valorSalario);
//Calcula e imprime a Saída (com 2 casas decimais):
const saida = valorSalario - valorImposto + valorBeneficios;
print(saida.toFixed(2));