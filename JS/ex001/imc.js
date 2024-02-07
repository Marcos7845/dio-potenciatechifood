/*calculo de imc

(imc = peso/altura*altura)

abaixo de 18.5 abaixo do peso
18.5 e 25 peso normal
25 a 30 acima do peso
30 a 40 obeso
acima de 40 obesidade grave

*/

function calcularIMC(peso, altura){
   return imc = (peso/(altura*altura));
}
function classificarIMC(imc){
    if(imc<=18.5){
        return 'Abaixo do peso';
    } else if( imc> 18.5 && imc <=25){
        return 'Peso Normal';
    }else if (imc>25 && imc < 30){
        return 'Acima do peso';
    } else if(imc>=30 && imc<40)
    return 'Obeso'
    else{
        return ('Obesidade grave')
    }
}

function main(){
const altura= 1.74;
const peso= 130;
const imc = calcularIMC(peso,altura)
const classificao = classificarIMC(imc)
console.log(classificarIMC(imc))

}

main()



